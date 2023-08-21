const colorService = require('../service/color-service');
const userColorService = require('../service/userColor-service');

class ColorController {
   async checkColors(req,res,next) {
    try{
      const userId = req.params.userId;
      const colordmc = req.body.colors;
      let colorsWithCount = await colorService.findColorsByUser(userId);
      let colors = colordmc.map((colorReq) => colorsWithCount.map(c => c.dmc).includes(colorReq) ? colorsWithCount.find(cwc => cwc.dmc === colorReq) : {dmc: colorReq, error: 'Такого цвета нет'});
      colors = colors.length === 0 ? colorsWithCount : colors;
      res.json(colors )
    }
    catch(e) {
      next(e)
    }
   }

  async findAll(req,res,next) {
    try{
      const userId = req.params.userId;
      let colorsWithCount = await colorService.findColorsByUser(userId);
    
      res.json(colorsWithCount)
    }
    catch(e) {
      next(e)
    }
  }

  async changeColorCount(req,res,next) {
    try{
      const userId = req.params.userId;
      const colordmc = req.params.colorId;
      const newCount = req.body.count;
      const color = await colorService.findColorByDMC(colordmc);
      await userColorService.changeCount(newCount, userId, color.id);
      res.json()
  
    }
    catch(e) {
      next(e)
    }
  }

  async changeNeedBuyColors(req,res,next) {
    try{
      const userId = req.params.userId;
      const colorsdmc = req.body.colors;
      const colors = await colorService.findAllColorsByDMC(colorsdmc);
      const existedColors = await userColorService.changeNeedBuyColors(userId, colors.map(item => item.id));
      res.json(existedColors)
  
    }
    catch(e) {
      next(e)
    }
  }
}

module.exports = new ColorController();
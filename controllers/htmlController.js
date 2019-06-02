const express = require('express');

exports.getIndex = function (req, res) {
  // const context: BurgerData[] = await burger.selectAll();
  res.render('index', { burgers: 'context' });
}
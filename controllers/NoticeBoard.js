const GeneralInfo = require('../models/NoticeBoardGeneral');

const EventInfo = require('../models/NoticeBoardEvent');

const getGeneralInfo = async (req, res) => {
  const { title, time, Date, venue, departmentName, posterLink } = req.body;

  if (!title || !time || !Date || !venue || !departmentName) {
    return res.status(404).json({
      msg: 'Please Provide All details!',
    });
  }

  const isGeneralInfoExists = await GeneralInfo.findOne({ title });

  if (isGeneralInfoExists && req.body.title == isGeneralInfoExists.title) {
    return res.status(400).json({
      msg: 'Already Exists...',
    });
  }

  const info = new GeneralInfo(req.body);

  if (info) {
    info.save();
    return res.status(201).json(info);
  }
};

const getEventInfo = async (req, res) => {
  const { title, time, Date, venue, departmentName, posterLink, fees, clubName } = req.body;

  if (!title || !time || !Date || !venue || !departmentName || !clubName) {
    return res.status(404).json({
      msg: 'Please Provide All details!',
    });
  }

  const isEventInfoExists = await EventInfo.findOne({ title });

  if (isEventInfoExists && req.body.title == isEventInfoExists.title) {
    return res.status(400).json({
      msg: 'Already Exists...',
    });
  }

  const info = new EventInfo(req.body);

  if (info) {
    info.save();
    return res.status(201).json(info);
  }
};

module.exports = { getGeneralInfo, getEventInfo };

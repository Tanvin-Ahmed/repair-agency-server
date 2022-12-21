const mongoose = require("mongoose");
const { ServiceModel } = require("./service.model");

const createService = async (info) => {
  return await ServiceModel.create(info);
};

const findServicesByCategory = async (category) => {
  return await ServiceModel.findOne({ category });
};

const findServiceById = async (id) => {
  const _id = mongoose.Types.ObjectId(id);
  return await ServiceModel.findById(_id);
};

const updateService = async (info) => {
  const id = mongoose.Types.ObjectId(info._id);
  return await ServiceModel.findByIdAndUpdate(
    id,
    {
      $set: {
        serviceName: info.serviceName,
        description: info.description,
        fee: info.fee,
      },
    },
    { new: true }
  );
};

const deleteServiceById = async (id) => {
  const _id = mongoose.Types.ObjectId(id);
  return await ServiceModel.findByIdAndDelete(_id);
};

const deleteServicesByCategory = async (category) => {
  return await ServiceModel.deleteMany({ category });
};

module.exports = {
  createService,
  findServicesByCategory,
  findServiceById,
  updateService,
  deleteServiceById,
  deleteServicesByCategory,
};

const { createCategory } = require("../category/category.service");
const {
  createService,
  findServicesByCategory,
  findServiceById,
  deleteServiceById,
  updateService,
  findServiceByIdWithoutImg,
} = require("./service.service");

const addService = async (req, res) => {
  try {
    const file = req.files.file;
    const category = req.body.category;
    const newCategory = req.body.newCategory;
    const serviceName = req.body.serviceName;
    const description = req.body.description;
    const fee = req.body.fee;

    const newImg = file.data;
    const encImg = newImg.toString("base64");
    const image = {
      contentType: file.mimetype,
      size: file.size,
      img: Buffer.from(encImg, "base64"),
    };

    if (newCategory) {
      await createCategory({ category: newCategory, image });
    }

    const serviceData = {
      category: category || newCategory,
      serviceName,
      description,
      fee,
      image,
    };

    await createService(serviceData);

    return res
      .status(200)
      .json({ message: "Service Successfully created", success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const getServicesByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const services = await findServicesByCategory(category);
    return res.status(200).json(services);
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const getServicesById = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await findServiceById(id);
    return res.status(200).json(service);
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const getServiceByIdWithoutImg = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await findServiceByIdWithoutImg(id);
    return res.status(200).json(service);
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const modifyService = async (req, res) => {
  try {
    const _id = req.params.id;
    const info = {
      _id,
      serviceName: req.body.serviceName,
      description: req.body.description,
      fee: req.body.fee,
    };

    const updatedService = await updateService(info);

    return res.status(200).json(updatedService);
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

const deleteSerivce = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteServiceById(id);

    return res
      .status(200)
      .json({ message: "Service deleted successfully!", success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = {
  addService,
  getServicesByCategory,
  getServicesById,
  modifyService,
  deleteSerivce,
  getServiceByIdWithoutImg,
};

import Quatation from "../models/quatation.js";

const submitQuatation = async (req, res) => {
  const {
    sealType,
    quantityRange,
    sealColour,
    customizationPrinting,
    deliveryLocation,
    personName,
    companyName,
    mobileNo,
    whatsAppNo,
    emailId,
  } = req.body;

  try {
    // Use the extracted fields here when creating the new Quatation
    const newQuatation = new Quatation({
      sealType,
      quantityRange,
      sealColour,
      customizationPrinting,
      deliveryLocation,
      personName,
      companyName,
      mobileNo,
      whatsAppNo,
      emailId,
    });

    await newQuatation.save();

    res.status(201).json({ message: "Quatation saved successfully" });
  } catch (error) {
    console.error("Error saving quatation", error);
    res.status(500).json({ error: "internal server error" });
  }
};

export default { submitQuatation };

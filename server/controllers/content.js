import Content from "../models/Content.js";

// create

export const createContent = async (req, res) => {
  try {
    const { content, customUrl } = req.body;
    console.log(req.body);
    const newContent = new Content({
      content: content,
      customUrl: customUrl,
    });
    await newContent.save();
    res.status(201).json({ newUrl: `/${customUrl}` });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//  read

export const getContent = async (req, res) => {
  try {
    const { editor } = req.params;
    const content = await Content.find({ customUrl: editor });
    res.status(200).json(content);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

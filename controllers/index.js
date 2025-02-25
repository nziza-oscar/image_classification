const Image = require("../models/Image");

exports.Classify =  async (req, res) => {
    if (!req.file) return res.redirect("/");

    const imagePath = path.join(__dirname, req.file.path);
    const model = await mobilenet.load();
    const imageBuffer = await tf.node.decodeImage(imagePath);
    const predictions = await model.classify(imageBuffer);

    // Save the top prediction in the database
    await Image.create({
        filename: req.file.filename,
        classification: predictions[0].className,
        probability: predictions[0].probability,
    });

    res.render("index", { prediction: predictions, image: req.file.filename });
};

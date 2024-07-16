const { getMediaIdFromUrl, getInstagramComments } = require("../service");

const getHelloWorld = async (req, res) => {
  try {
    res.json({ text: "Hello world" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "An error occured while processing your request",
    });
  }
};

const getInstagramCommentsWinner = async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }
    const mediaId = await getMediaIdFromUrl(url);
    if (!mediaId) {
      return res.status(404).json({ error: "Media not found" });
    }

    const comments = await getInstagramComments(mediaId);

    if (comments.length === 0) {
      return res.status(404).json({ error: "No comments found" });
    }

    const randomIndex = Math.floor(Math.random() * comments.length);
    const winner = comments[randomIndex];

    res.json({
      winner: winner.username,
      winningComment: winner.text,
    });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
};

module.exports = {
  getHelloWorld,
  getInstagramCommentsWinner,
};

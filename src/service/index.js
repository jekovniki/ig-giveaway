const axios = require("axios");

async function getInstagramComments(mediaId) {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v13.0/${mediaId}/comments`,
      {
        params: {
          access_token: ACCESS_TOKEN,
          fields: "username,text",
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}

async function getMediaIdFromUrl(url) {
  // Extract the shortcode from the URL
  const shortcode = url.split("/p/")[1].split("/")[0];

  try {
    const response = await axios.get(
      `https://graph.facebook.com/v13.0/${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`,
      {
        params: {
          access_token: ACCESS_TOKEN,
          fields: "id,permalink",
        },
      }
    );

    const media = response.data.data.find((item) =>
      item.permalink.includes(shortcode)
    );
    return media ? media.id : null;
  } catch (error) {
    console.error("Error fetching media ID:", error);
    throw error;
  }
}

module.exports = {
  getInstagramComments,
  getMediaIdFromUrl,
};

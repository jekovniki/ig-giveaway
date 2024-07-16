# Instagram Giveaway Winner Picker

This Node.js application provides an API to pick a random winner from the comments of an Instagram post. It uses Express.js for the server and interacts with the Instagram Graph API to fetch comments.

## Features

- Fetch comments from a given Instagram post URL
- Randomly select a winner from the comments
- Simple "Hello World" endpoint for testing

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (usually comes with Node.js)
- Instagram Business or Creator account
- Facebook Developer account with necessary permissions

## Installation

1. Clone the repository
2. Navigate to the project directory `cd`
3. Install the dependencies: `npm install`
4. Create a `.env` file in the root directory and add your Instagram API credentials:

```
INSTAGRAM_ACCESS_TOKEN=your_access_token_here
INSTAGRAM_BUSINESS_ACCOUNT_ID=your_account_id_here
```

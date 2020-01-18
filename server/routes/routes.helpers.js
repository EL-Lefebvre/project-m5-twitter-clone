const data = require('../data');

// HARDCODED CURRENT USER.
const CURRENT_USER_HANDLE = 'treasurymog';

const MAX_DELAY = 1000; // TODO: Change me back to 3000

// Our server is very lean and quick, given that it doens't actually connect
// to a database or deal with any sort of scale!
// We want to provide a more realistic experience, so we'll do 2 things for
// all responses:
// - Add an arbitrary delay of 0-2 seconds
// - Add a 5% chance of a 500 error
const simulateProblems = (res, data) => {
  const delay = Math.random() * MAX_DELAY;

  setTimeout(() => {
    const shouldError = Math.random() <= 0.05;

    if (shouldError) {
      res.sendStatus(500);
      return;
    }

    res.json(data);
  }, delay);
};

const getUser = handle => {
  return data.users[handle.toLowerCase()];
};
const getUserProfile = handle => {
  const user = getUser(handle);
  const currentUser = data.users[CURRENT_USER_HANDLE];

  const mutableUser = { ...user };

  delete mutableUser.followingIds;
  delete mutableUser.followerIds;
  delete mutableUser.likeIds;

  mutableUser.numFollowing = user.followingIds.length;
  mutableUser.numFollowers = user.followerIds.length;
  mutableUser.numLikes = user.likeIds.length;
  mutableUser.isFollowingYou = user.followingIds.includes(currentUser.handle);
  mutableUser.isBeingFollowedByYou = currentUser.followingIds.includes(
    user.handle
  );

  return mutableUser;
};

const denormalizeTweet = tweet => {
  const tweetCopy = { ...tweet };

  delete tweetCopy.authorHandle;

  tweetCopy.author = getUserProfile(tweet.authorHandle);

  delete tweetCopy.likedBy;
  delete tweetCopy.retweetedBy;

  tweetCopy.isLiked = tweet.likedBy.includes(CURRENT_USER_HANDLE);
  tweetCopy.isRetweeted = tweet.retweetedBy.includes(CURRENT_USER_HANDLE);
  tweetCopy.numLikes = tweet.likedBy.length;
  tweetCopy.numRetweets = tweet.retweetedBy.length;

  return tweetCopy;
};

const getTweetsFromUser = userId => {
  return Object.values(data.tweets)
    .filter(tweet => tweet.authorHandle.toLowerCase() === userId.toLowerCase())
    .map(denormalizeTweet);
};

module.exports = {
  CURRENT_USER_HANDLE,
  simulateProblems,
  getUser,
  getUserProfile,
  denormalizeTweet,
  getTweetsFromUser,
};
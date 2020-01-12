import { GET_DASHBOARD } from "../actions/types.js";

const initialState = {
  tweets: [],
  tweetsAnalyzed: 0,
  noNegativeTweets: 0,
  percentageNegativeTweets: 0,
  percentageTechnicalIssues: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DASHBOARD:
      return {
        ...state,
        allKeywords: action.payload.allKeywords,
        tweetsAnalyzed: action.payload.tweetsAnalyzed,
        noNegativeTweets: action.payload.noNegativeTweets,
        uniqueList: action.payload.uniqueList,
        tweets: action.payload.tweets,
      };
    default:
      return state;
  }
}

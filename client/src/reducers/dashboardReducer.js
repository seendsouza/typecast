import { GET_DASHBOARD } from "../actions/types.js";

const initialState = {
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
        tweetsAnalyzed: action.payload.tweets_analyzed,
        noNegativeTweets: action.payload.no_negative_tweets,
        percentageNegativeTweets: action.payload.percentage_negative_tweets,
        percentageTechnicalIssues: action.payload.percentage_technical_issues
      };
    default:
      return state;
  }
}

import { GET_DASHBOARD } from "../actions/types.js";

const initialState = {
  tweets: [],
  tweetsAnalyzed: 0,
  noNegativeTweets: 0,
  uniqueList: [],
  perception: 0,
  percentageNegativeTweets: 0,
  percentageTechnicalIssues: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DASHBOARD:
      const dict = action.payload.uniqueList;
      var items = Object.keys(dict).map(function(key) {
        return [key, dict[key]];
      });
      
      // Sort the array based on the second element
      items.sort(function(first, second) {
        return second[1] - first[1];
      });
      return {
        ...state,
        allKeywords: action.payload.allKeywords,
        tweetsAnalyzed: action.payload.tweetsAnalyzed,
        noNegativeTweets: action.payload.noNegativeTweets,
        uniqueList: items,
        perception: action.payload.perception,
        tweets: action.payload.tweets,
      };
    default:
      return state;
  }
}

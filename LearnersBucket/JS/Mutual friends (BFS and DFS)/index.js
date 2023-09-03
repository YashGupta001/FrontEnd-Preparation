/*

https://www.youtube.com/watch?v=QZ5_YL5z3eI&list=PL_KW_uw2ITn84SjTLNQsugTU3hU4_EwLM&index=24

*/

// My Solution using BFS

const mapping = {
  a: ["b", "c"],
  b: ["d", "g"],
  d: ["p", "q"],
  l: ["x", "y"],
};

const mutualFriend = (mapping, person) => {
  const friends = [];
  const friendList = mapping[person];

  while (friendList && friendList.length > 0) {
    const current = friendList.shift();
    const currentFriends = mapping[current];
    if (currentFriends) {
      for (let curr of currentFriends) {
        friendList.push(curr);
      }
    }

    friends.push(current);
  }

  return friends;
};

mutualFriend(mapping, "a");

// Solution using DFS

const mapping1 = {
  a: ["b", "c"],
  b: ["d", "g"],
  d: ["p", "q"],
  l: ["x", "y"],
};

const mutualFriend1 = (mapping, person) => {
  const friendList = mapping[person];
  if (friendList && friendList.length > 0) {
    const finalList = [...friendList];

    for (let friend of friendList) {
      const mutualFriend = mutualFriend1(mapping, friend);
      finalList.push(...mutualFriend);
    }

    return finalList;
  }

  return [];
};

mutualFriend1(mapping1, "a");

const fs = require("fs");

const profileData = [];
const usersNoPhone = [];
const usersHaveArticles = [];
const usersHaveAnnis = [];
const usersHaveArticles2020 = [];
const usersBorn1986 = [];
const articlesContainTips = [];
const articlesBeforeAug2019 = [];

fs.readFile("profile_list.json", (err, data) => {
  if (err) throw err;
  let profileList = JSON.parse(data);

  for (prof in profileList) {
    profileData.push(profileList[prof].profile);
  }
  //1. Users who doesn't have any phone numbers
  const noPhone = profileData.filter((d) => d.phones.length == 0);
  for (phone in noPhone) {
    usersNoPhone.push(noPhone[phone].full_name);
  }

  //2. Users who have articles
  const articles = profileList.filter((d) => d.articles.length);
  for (art in articles) {
    usersHaveArticles.push(articles[art].profile.full_name);
  }

  //3. Find users who have "annis" on their name.
  for (annis in profileData) {
    if (profileData[annis].full_name.match(/Annis/) !== null) {
      usersHaveAnnis.push(profileData[annis].full_name);
    }
  }

  //4. Find users who have articles on year 2020.
  const articlesYear = profileList.filter((d) => d.articles.length);
  for (artYear in articlesYear) {
    for (publish in articlesYear[artYear].articles) {
      if (
        (articlesYear[artYear].articles[publish].published_at.substring(0, 4) ==
          2020) ==
        true
      ) {
        usersHaveArticles2020.push(articlesYear[artYear].profile.full_name);
      }
    }
  }

  //5. Find users who are born on 1986.
  for (birth in profileData) {
    if ((profileData[birth].birthday.substring(0, 4) == 1986) == true) {
      usersBorn1986.push(profileData[birth].full_name);
    }
  }

  //6. Find articles that contain "tips" on the title.
  const articlesTips = profileList.filter((d) => d.articles.length);
  for (tips in articlesTips) {
    for (title in articlesTips[tips].articles) {
      if (articlesTips[tips].articles[title].title.match(/Tips/) !== null) {
        articlesContainTips.push(articlesTips[tips].articles[title].title);
      }
    }
  }

  //7. Find articles published before August 2019.
  const articlesBefore = profileList.filter((d) => d.articles.length);
  for (artYear in articlesBefore) {
    for (publish in articlesBefore[artYear].articles) {
      if (
        articlesBefore[artYear].articles[publish].published_at.substring(5, 7) <
          08 &&
        (articlesBefore[artYear].articles[publish].published_at.substring(
          0,
          4
        ) ==
          2019) ==
          true
      ) {
        articlesBeforeAug2019.push(
          articlesBefore[artYear].articles[publish].title
        );
      }
    }
  }

  console.log("1. Users who doesn't have any phone numbers", usersNoPhone);
  console.log("2. Users who have articles", usersHaveArticles);
  console.log("3. Find users who have annis on their name", usersHaveAnnis);
  console.log(
    "4. Find users who have articles on year 2020",
    usersHaveArticles2020
  );
  console.log("5. Find users who are born on 1986", usersBorn1986);
  console.log(
    "6. Find articles that contain tips on the title",
    articlesContainTips
  );
  console.log(
    "7. Find articles published before August 2019",
    articlesBeforeAug2019
  );
});

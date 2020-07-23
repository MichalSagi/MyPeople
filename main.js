const source = $("#people-template").html();
const template = Handlebars.compile(source);
let people;

const getPeople = function () {
  $.ajax({
    method: "GET",
    url: `https://randomuser.me/api/?results=10&inc=gender,name,email,login,id,picture`,
    success: function (data) {
      people = data.results;
      renderPeople();
    },
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
};
getPeople();

const renderPeople = function () {
  const someHTML = template(people);
  $("#people-data").append(someHTML);
};

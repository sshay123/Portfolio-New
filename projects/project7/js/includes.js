document.addEventListener("DOMContentLoaded", () => {
  const members = [
    {
      memberID: 0,
      firstName: "John",
      lastName: "Smith",
      img: "images/member-4.jpg",
      email: "",
      signupDate: "01/01/2021"
    },
    {
      memberID: 1,
      firstName: "Dan",
      lastName: "Oliver",
      img: "images/member-4.jpg",
      email: "dan.oliver82@example.com",
      signupDate: "01/01/2021"
    },
    {
      memberID: 2,
      firstName: "Dawn",
      lastName: "Wood",
      img: "images/member-3.jpg",
      email: "dawn.wood16@example.com",
      signupDate: "01/01/2021"
    },
    {
      memberID: 3,
      firstName: "Dale",
      lastName: "Byrd",
      img: "images/member-2.jpg",
      email: "dale.byrd52@example.com",
      signupDate: "01/01/2021"
    },
    {
      memberID: 4,
      firstName: "Victoria",
      lastName: "Chambers",
      img: "images/member-1.jpg",
      email: "victoria.chambers80@example.com",
      signupDate: "01/01/2021"
    }
  ];

  const activity = [
    {
      entry: 1,
      memberID: 0,
      action: "posted",
      thing: "<a href='#'>Test Blog</a>",
      age: "99 hours ago"
    },
    {
      entry: 2,
      memberID: 1,
      action: "posted",
      thing: "<a href='#'>WebApp's SEO Tips</a>",
      age: "1 day ago"
    },
    {
      entry: 3,
      memberID: 2,
      action: "commented on",
      thing: "<a href='#'>Facebook's Changes for 2021</a>",
      age: "5 hours ago"
    },
    {
      entry: 4,
      memberID: 3,
      action: "liked the post",
      thing: "<a href='#'>Facebook's Changes for 2021</a>",
      age: "1 day ago"
    },
    {
      entry: 5,
      memberID: 4,
      action: "commented on",
      thing: "<a href='#'>WebApp's SEO Tips</a>",
      age: "4 hours ago"
    }
  ];

  const profileImg = document.querySelectorAll(".profile-img")[0];
  profileImg.style.background =
    "black url('" + members[0].img + "') center center / cover no-repeat";

  const profileName = document.querySelectorAll(".profile-name")[0];
  profileName.innerHTML = members[0].firstName + " " + members[0].lastName;

  const alert = document.querySelectorAll(".alert")[0];
  const hide = document.getElementById("hide");
  hide.addEventListener("click", () => {
    alert.style.display = "none";
  });

  const lastFourNewMembers = members.slice(members.length - 4);
  lastFourNewMembers.reverse();

  const lastFourOfActivity = activity.slice(activity.length - 4);
  lastFourOfActivity.reverse();

  const iterateMultipleTimes = (num, runThis) => {
    for (let i = 0; i < num; i++) {
      runThis(i);
    }
  };

  const memberImg = i => {
    const className = ".member-img.member-" + i;
    const member = document.querySelectorAll(className);
    for (let j = 0; j < member.length; j++) {
      member[j].style.background =
        "black url('" +
        lastFourNewMembers[i].img +
        "') center center / cover no-repeat";
    }
  };

  const memberName = i => {
    const className = ".member-name.member-" + i;
    const member = document.querySelectorAll(className);
    for (let j = 0; j < member.length; j++) {
      const name =
        lastFourNewMembers[i].firstName + " " + lastFourNewMembers[i].lastName;
      member[j].textContent = name;
    }
  };

  const memberEmail = i => {
    const className = ".member-email.member-" + i;
    const member = document.querySelectorAll(className)[0];
    const email = lastFourNewMembers[i].email;
    member.textContent = email;
  };

  const memberDate = i => {
    const className = ".member-date.member-" + i;
    const member = document.querySelectorAll(className)[0];
    const date = members[i].signupDate;
    member.textContent = date;
  };

  const memberActivity = i => {
    const className = ".member-activity-" + i;
    const memberActivity = document.querySelectorAll(className);

    const memberLookup = members.find(
      person => person.memberID === lastFourOfActivity[i].memberID
    );

    memberActivity[0].style.background =
      "black url('" + memberLookup.img + "') center center / cover no-repeat";

    memberActivity[1].innerHTML =
      memberLookup.firstName +
      " " +
      memberLookup.lastName +
      " " +
      lastFourOfActivity[i].action +
      " " +
      lastFourOfActivity[i].thing;

    memberActivity[2].innerHTML = lastFourOfActivity[i].age;
  };

  iterateMultipleTimes(4, memberActivity);
  iterateMultipleTimes(4, memberImg);
  iterateMultipleTimes(4, memberName);
  iterateMultipleTimes(4, memberEmail);
  iterateMultipleTimes(4, memberDate);

  let $names = [];

  let $members = e => {
    for (let i = 0; i < members.length; i++) {
      $names.push(members[i].firstName + " " + members[i].lastName);
    }
  };
  $members();
  $names.sort();

  for (let i = 0; i < $names.length; i++) {
    let option = document.createElement("option");
    option.value = $names[i];
    datalist.appendChild(option);
  }

  const sendMessageButton = document.getElementById("sendMessage");
  const searchNameInput = document.getElementById("searchName");
  const messageForUserInput = document.getElementById("messageForUser");

  sendMessageButton.addEventListener("click", e => {
    e.preventDefault();

    const sendMessage = () => {
      let searchInput = searchNameInput.value;
      let messageInput = messageForUserInput.value;
      console.log(typeof searchInput, searchInput);
      console.log(typeof messageInput, messageInput);

      if (searchInput === "" && messageInput === "") {
        window.alert("Please input user name and message.");
      } else if (searchInput === "") {
        window.alert("Please input user name.");
      } else if (messageInput === "") {
        window.alert("Please input message for user.");
      } else {
        window.alert("Your message has been sent to " + searchInput + "!");
      }
    };
    sendMessage();
  });

  const $form = document.getElementById("form-settings");
  const $switchEmail = document.getElementById("emailNotifications");
  const $switchProfile = document.getElementById("setProfileToPublic");
  const $select = document.getElementById("timezones");
  const $reset = document.getElementById("resetSettings");

  $($switchEmail).click(function() {
    if ($(this).is(":checked") === true) {
      $(this)
        .attr("checked", true)
        .val("on");
    } else if ($(this).is(":checked") === false) {
      $(this)
        .attr("checked", false)
        .val("off");
    }
  });

  $($switchProfile).click(function() {
    if ($(this).is(":checked") === true) {
      $(this)
        .attr("checked", true)
        .val("on");
    } else if ($(this).is(":checked") === false) {
      $(this)
        .attr("checked", false)
        .val("off");
    }
  });

  if (localStorage.getItem("switchEmailLSValue")) {
    let storedValue = localStorage.getItem("switchEmailLSValue");
    if (storedValue === "on") {
      $($switchEmail)
        .attr("checked", true)
        .val("on");
    } else if (storedValue === "off") {
      $($switchEmail)
        .attr("checked", false)
        .val("off");
    }
  }

  if (localStorage.getItem("switchProfileLSValue")) {
    let storedValue = localStorage.getItem("switchProfileLSValue");
    if (storedValue === "on") {
      $($switchProfile)
        .attr("checked", true)
        .val("on");
    } else if (storedValue === "off") {
      $($switchProfile)
        .attr("checked", false)
        .val("off");
    }
  }

  if (localStorage.getItem("timezoneLSValue")) {
    let storedValue = localStorage.getItem("timezoneLSValue");
    document.querySelector(
      'select [value="' + storedValue + '"]'
    ).selected = true;
  }

  $($form).submit(e => {
    e.preventDefault();
    let switchEmailValue = $switchEmail.value;
    let switchProfileValue = $switchProfile.value;
    let timezoneValue = $select[$select.selectedIndex].value;
    localStorage.setItem("switchEmailLSValue", switchEmailValue);
    localStorage.setItem("timezoneLSValue", timezoneValue);
    localStorage.setItem("switchProfileLSValue", switchProfileValue);
  });

  $($reset).click(() => {
    localStorage.removeItem("switchEmailLSValue");
    localStorage.removeItem("timezoneLSValue");
    localStorage.removeItem("switchProfileLSValue");

    $($switchEmail)
      .prop("checked", true)
      .attr("checked", true)
      .val("on");

    $($switchProfile)
      .prop("checked", true)
      .attr("checked", true)
      .val("on");

    document.querySelector('select [value=""]').selected = true;
  });

  window.onclick = e => {
    if (!e.target.matches("#dropbtn")) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
});

function toggleDropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

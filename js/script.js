"use strict";

let link = "";

document.addEventListener("DOMContentLoaded", async () => {
  const dateItems = document.querySelectorAll("[data-date]");
  if (dateItems) {
    dateItems.forEach((dateItem) => {
      dateItem.textContent = new Date()
        .toISOString()
        .slice(0, 10)
        .split("-")
        .reverse()
        .join(".");
    });
  }

  async function genSubgroupList(department, form, group) {
    let response;
    const url = `https://api.calar.ru/subgroups/${department}/${form}/${group}`;
    const res = await fetch(url);
    response = await res.json();

    let checkboxes = "";
    response = response.forEach((subgroup, _) => {
      checkboxes += `<label class="checkbox">
                       <input type="checkbox"
                              name="other"
                              value="${subgroup}"
                              class="checkbox__input"
                              hidden />
                       <span>${subgroup}</span>
                     </label>`;
    });

    return checkboxes;
  }

  const slider = new Swiper(".wrapper", {
    direction: "vertical",
    speed: 800,
    allowTouchMove: false,
    on: {
      click: async function (swiper, event) {
        const target = event.target;
        if (target.classList.contains("main__btn")) {
          if (target.id == "btn2") {
            const currentScreen = target.closest("section");
            if (!validateFields(currentScreen)) {
              getAlert();
              return;
            }
            const reqItems = currentScreen.querySelectorAll("[data-required]");
            const department = reqItems[0].value;
            const form = reqItems[1].value;
            const group = reqItems[2].value;
            document.getElementById("subgroups-picker").innerHTML =
              await genSubgroupList(department, form, group);
          }
          if (target.id == "btn3") {
            getResult();
          }
          swiper.slideNext();
        }

        if (target.closest(".header__btn-start")) {
          swiper.slideTo(0);
          document.querySelectorAll("form").forEach((form) => form.reset());
        }
      },
      progress: (swiper, progress) => {
        let color = null;
        if (swiper.activeIndex == 0) {
          color = "blue";
        }
        if (swiper.activeIndex == 1) {
          color = "yellow";
        }
        if (swiper.activeIndex == 2) {
          color = "green";
        }
        document.querySelector(".progressbar__fill").style.width =
          progress * 100 + "%";
        document.querySelector(".progressbar__fill").dataset.color = color;
      },
    },
  });

  function validateFields(currentScreen) {
    let isValid = true;

    const reqItems = currentScreen.querySelectorAll("[data-required]");
    reqItems.forEach((reqItem) => {
      if (reqItem.value == "") {
        isValid = false;
      }
    });

    return isValid;
  }

  function getAlert() {
    if (document.querySelector(".alert")) return;
    const alert = document.createElement("div");
    alert.classList.add("alert");
    alert.textContent =
      "Пожалуйста, заполните данные о вашем образовании перед переходом на следующий шаг!";
    document.body.append(alert);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  function getResult() {
    const group = document.getElementById("group").value;
    const map_form = document.getElementById("map_form").value;
    const department = document.getElementById("department").value;
    const subgroups = Array.from(
      document.querySelectorAll("input[type=checkbox]:checked")
    ).map((x) => x.value);

    link = "https://api.calar.ru/" + department + "/" + map_form + "/" + group;
    link = link.toLowerCase();

    if (subgroups != "") {
      link += "?subgroups=" + JSON.stringify(subgroups);
    }

    document.getElementById("main__link").textContent = link;

    $("button#download").click(function () {
      window.location = link;
    });
  }

  function stopScroll(e) {
    var t = e.target;
    if (t.tagName !== "INPUT") return;

    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    t.style.webkitTransform = "translate3d(0px,-10000px,0)";
    webkitRequestAnimationFrame(function () {
      t.style.webkitTransform = "";
    });
  }

  document.body.addEventListener("focus", stopScroll);
  document.body.addEventListener("focusin", stopScroll);

  $(function () {
    $(".btn_1").on("click", function () {
      const type = "text/plain";
      const blob = new Blob([link], { type });
      const data = [new ClipboardItem({ [type]: blob })];
      navigator.clipboard.write(data);
    });

    function validate() {
      setTimeout(function () {
        $(".btn_1").removeClass("onclic");
        $(".btn_1").addClass("validate", 10, callback());
      }, 700);
    }

    function callback() {
      setTimeout(function () {
        $(".btn_1").removeClass("validate");
      }, 300);
    }
  });

  $(function () {
    $(".btn_2").on("click", function () {
      $(".btn_2").addClass("onclic", 250, validate());
    });

    function validate() {
      setTimeout(function () {
        $(".btn_2").removeClass("onclic");
        $(".btn_2").addClass("validate", 450, callback());
      }, 700);
    }
    function callback() {
      setTimeout(function () {
        $(".btn_2").removeClass("validate");
      }, 300);
    }
  });
});

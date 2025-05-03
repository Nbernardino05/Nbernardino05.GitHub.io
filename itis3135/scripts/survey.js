document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const addCourseBtn = document.getElementById("add_course");
    const courseFields = document.getElementById("course_fields");
    const main = document.querySelector("main");
  
    addCourseBtn.addEventListener("click", function () {
      const courseDiv = document.createElement("div");
      courseDiv.classList.add("course-entry");
  
      const input = document.createElement("input");
      input.type = "text";
      input.classList.add("course");
      input.placeholder = "Enter a course";
      input.required = true;
      courseDiv.appendChild(input);
  
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", function () {
        courseDiv.remove();
      });
      courseDiv.appendChild(deleteBtn);
  
      courseFields.appendChild(courseDiv);
    });
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const requiredFields = form.querySelectorAll("input[required]");
      for (const field of requiredFields) {
        if (!field.value.trim() && field.type !== "file") {
          alert("Please fill out all required fields.");
          return;
        }
      }
  
      const imageInput = document.getElementById("image");
      const file = imageInput.files[0];
  
      if (!file || !["image/png", "image/jpeg"].includes(file.type)) {
        alert("Please upload a valid PNG or JPG image.");
        return;
      }
  
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageSrc = e.target.result;
  
        const courseList = Array.from(document.querySelectorAll(".course"))
          .map((input) => input.value)
          .filter((value) => value.trim() !== "");
  
        const outputHTML = `
          <section id="output">
            <h3>Your BYO Intro Page</h3>
            <p><strong>Name:</strong> ${document.getElementById("name").value}</p>
            <p><strong>Mascot:</strong> ${document.getElementById("mascot").value}</p>
            <img src="${imageSrc}" alt="Uploaded Image" style="max-width:300px;"><br>
            <p><em>${document.getElementById("image_caption").value}</em></p>
            <p><strong>Personal Background:</strong> ${document.getElementById("personal_background").value}</p>
            <p><strong>Professional Background:</strong> ${document.getElementById("professional_background").value}</p>
            <p><strong>Academic Background:</strong> ${document.getElementById("academic_background").value}</p>
            <p><strong>Background in this Subject:</strong> ${document.getElementById("web_background").value}</p>
            <p><strong>Primary Computer Platform:</strong> ${document.getElementById("comp_platform").value}</p>
            <p><strong>Courses:</strong> ${courseList.length > 0 ? "<ul><li>" + courseList.join("</li><li>") + "</li></ul>" : "None entered"}</p>
            <p><strong>Funny Thing:</strong> ${document.getElementById("funny_thing").value}</p>
            <p><strong>Anything Else:</strong> ${document.getElementById("extra_info").value}</p>
            <button id="resetBtn">Reset Form</button>
          </section>
        `;
  
        main.innerHTML = outputHTML;
  
        document.getElementById("resetBtn").addEventListener("click", function () {
          location.reload();
        });
      };
  
      reader.readAsDataURL(file);
    });
  });
  
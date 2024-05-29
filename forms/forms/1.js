let form = document.getElementById("form");
  const submitBtn = document.getElementById("submit_btn");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const selectedConnectors = [{
        url: ":8880/users",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa("luciana:admin"),
        },
      }];
  
    await formHandler(e, form, submitBtn, selectedConnectors);
  });
  
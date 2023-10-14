const peitoralButton = document.getElementById("card-1");
      const tricepsButton = document.getElementById("card-2");
      const abdomenButton = document.getElementById("card-3");
      const todosButton = document.getElementById("card-all");

      const peitoralCard = document.getElementById("card-um");
      const tricepsCard = document.getElementById("card-dois");
      const abdomenCard = document.getElementById("card-tres");


      peitoralButton.addEventListener("click", () => {
        peitoralCard.style.display = "block";
        tricepsCard.style.display = "none";
        abdomenCard.style.display = "none";
      });

      tricepsButton.addEventListener("click", () => {
        peitoralCard.style.display = "none";
        tricepsCard.style.display = "block";
        abdomenCard.style.display = "none";
      });

      abdomenButton.addEventListener("click", () => {
        peitoralCard.style.display = "none";
        tricepsCard.style.display = "none";
        abdomenCard.style.display = "block";
      });

      todosButton.addEventListener("click", () => {
        peitoralCard.style.display = "block";
        tricepsCard.style.display = "block";
        abdomenCard.style.display = "block";
      });
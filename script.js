let barsContainer = document.getElementById("bars-container");
        let sizeSlider = document.getElementById("size-slider");
        let speedSlider = document.getElementById("speed-slider");
        let workingSpace = document.getElementById("working-space");
        let array = [];
        
        function createBars() {
            barsContainer.innerHTML = "";
            array = [];
            for (let i = 0; i < sizeSlider.value; i++) {
                let value = Math.floor(Math.random() * 100) + 1;
                array.push(value);
                let bar = document.createElement("div");
                bar.style.height = value + "%";
                bar.classList.add("bar");
                barsContainer.appendChild(bar);
            }
        }
        
        function resetArray() {
            createBars();
            workingSpace.innerHTML = "Working Space";
        }
        
        function startSort(type) {
            console.log("Sorting with", type);
            workingSpace.innerHTML = "Sorting with " + type;
        }

// Fetch the JSON file
fetch('./technical_project_management.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(jsonData => {
        // Function to extract asset titles and descriptions
        function getAssetTitlesAndDescriptions(jsonData) {
            const tasks = jsonData.tasks || [];
            const assetsArray = [];

            var exploreBoxHeading = document.querySelector(".exploreContent h1")
            var listHeading = document.querySelector("#listHeading")
            exploreBoxHeading.innerHTML = tasks[0].task_title
            listHeading.innerHTML = tasks[0].task_title

            var exploreBoxPara = document.querySelector(".exploreContent p")
            exploreBoxPara.innerHTML = tasks[0].task_description

            tasks.forEach(task => {
                const assets = task.assets || [];
                assets.forEach(asset => {
                    assetsArray.push({
                        asset_title: asset.asset_title,
                        asset_description: asset.asset_description
                    });
                });
            });

            return assetsArray;
        }

        // Extracting the asset titles and descriptions
        var assetsInfo = getAssetTitlesAndDescriptions(jsonData);


        var asset1Heading = document.querySelector("#A .headingBar h1")
        var asset1Desc = document.querySelector("#A .discription span")
        var listItem1 = document.querySelector("#listItem1")
        asset1Heading.innerHTML = assetsInfo[0].asset_title
        listItem1.innerHTML = assetsInfo[0].asset_title
        asset1Desc.innerHTML = assetsInfo[0].asset_description

        var asset2Heading = document.querySelector("#B .headingBar h1")
        var asset2Desc = document.querySelector("#B .discription span")
        var listItem2 = document.querySelector("#listItem2")
        asset2Heading.innerHTML = assetsInfo[1].asset_title
        listItem2.innerHTML = assetsInfo[1].asset_title
        asset2Desc.innerHTML = assetsInfo[1].asset_description

        var asset3Heading = document.querySelector("#C .headingBar h1")
        var asset3Desc = document.querySelector("#C .discription span")
        var listItem3 = document.querySelector("#listItem3")
        asset3Heading.innerHTML = assetsInfo[2].asset_title
        listItem3.innerHTML = assetsInfo[2].asset_title
        asset3Desc.innerHTML = assetsInfo[2].asset_description

        var asset4Heading = document.querySelector("#D .headingBar h1")
        var asset4Desc = document.querySelector("#D .discription span")
        var listItem4 = document.querySelector("#listItem4")
        asset4Heading.innerHTML = assetsInfo[3].asset_title
        listItem4.innerHTML = assetsInfo[3].asset_title
        asset4Desc.innerHTML = assetsInfo[3].asset_description


        // Display the JSON data and extracted info in the HTML
        document.getElementById('output').textContent = JSON.stringify(assetsInfo, null, 2);
    })
    .catch(error => console.error('Error fetching JSON file:', error));








var img = document.querySelector(".journeyBoardHeading img")
var JB = document.querySelector(".journeyBoard")
var JBH = document.querySelector(".journeyBoardHeading")
var JBHC = document.querySelector(".JBHC")
var num = document.querySelector(".number")
var list = document.querySelector(".journeyBoard ul");

var open = 0;

img.addEventListener("click", function () {
    if (open) {
        JBH.style.width = "132px";
        JB.style.width = "132px";
        img.style.rotate = "0deg";
        img.style.left = "81px";
        JBHC.style.display = "none";
        num.style.display = "flex";
        list.style.display = "none";
        open = 0;
    }
    else {
        JBH.style.width = "392px";
        JB.style.width = "392px";
        img.style.rotate = "180deg";
        img.style.left = "342px";
        JBHC.style.display = "block";
        num.style.display = "none";
        list.style.display = "block";
        open = 1;
    }
})
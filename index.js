//Function for placing background images throughout the browser
function tile(ImgAssest, Xpos, Ypos, Zpos, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(ImgAssest, Xpos + w*100, Ypos + h*100, Zpos)
        }
    }
}

//Function for placing static images throughout the browser
function newImage (ImgAssest, Xpos, Ypos, Zpos) {
    let nImg = document.createElement('img')
    nImg.src = ImgAssest
    nImg.style.position = 'fixed'
    nImg.style.left = Xpos +'px'
    nImg.style.bottom = Ypos +'px'
    nImg.style.Zpos = Zpos
    document.body.append(nImg)
    return nImg
}

//Function for placing new items throughout the browser
function newItem (ImgAssest, Xpos, Ypos, Zpos) {
    let nItm = newImage (ImgAssest, Xpos, Ypos, Zpos)
    nItm.addEventListener('dblclick', function(){
        nItm.remove()
    })
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

//Call background image function and pass in requested asset and desired location. 
tile('assets/sky.png', 0, horizon, 0, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, 0, window.innerWidth/100, heightOfGrass/100)

//Call new Image function and pass in requested asset and desired location. 
newImage ('assets/green-character.gif', 100, 100, 1) //Add Green Character
newImage ('assets/pine-tree.png', 450, 200, 1) //Add Pine Tree
newImage ('assets/tree.png', 200, 300, 1) //Add a Tree
newImage ('assets/pillar.png', 350, 100, 1) //Add a Pillar
newImage ('assets/crate.png', 150, 200, 1) //Add a Crate
newImage ('assets/well.png', 500, 425, 1) //Add a Well

//Call new Item function and pass in requested asset and desired location. 
newItem('assets/sword.png', 500, 405, 2) //Add a Sword
newItem('assets/sheild.png', 165, 185, 2) //Add a Shield
newItem('assets/staff.png', 600, 100, 2) //Add a Staff


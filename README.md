# Call Of Duty Class Builder


  <img src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1644350672/Screenshot_2022-02-08_at_19.48.25_xvsgbs.png" name="image-name">


## Overview

Playing Call Of Duty: Warzone with my friends got me through the first lockdown way back in  March 2020. I was working long hours from home, and couldn’t really go anywhere safely, so pretty much all of my social time was spent gaming with my friends.

As is the case with most competitive online FPS games, Warzone has a continuously evolving weapon meta - meaning the best builds in March 2020 might be redundant	by July 2020 - as well as an emphasis on min-maxing to create the ideal weapon build*. Additionally,  given the 1vs 100+ nature of Battle Royale games, the chances of actually winning are slim and margins for error are small.  These two things combined means that in order to win games, players have to keep up with the constant tweaks to game balance and adjust their builds accordingly**.

For most of the time when I was playing a lot, I relied on Google sheets posted by community members to find out the best builds, but these tended to be the result of testing data whichwasn’t provided, and were also solely focused on achieving the fastest possible TTK with minimal concurrent penalties. These, while useful, didn’t let you experiment too much and so I wanted to build an app which allowed you to test out different builds and see the changes to stat numbers in real time.

*if you’re unfamiliar with the game or min-maxing in general: Warzone weapon classes are built from weapons and attachments (up to 5 of which can be used on each weapon). Weapons come with their own initial base stats, and attachments boost those stats but also often come with penalties. Therefore min-maxing is building a class which aims for the higher number of stat boosts with the lowest number of/most negligible stat penalties.


## Goal & Timeframe

I wanted to build a full stack MERN app with CRUD functionality using React, Express and MongoDB as a way to test and improve my skills in these technologies. 

This was build solo over the Christmas and New Year period of 2021/22.


## Technologies Used

* React.js
* Express
* MongoDB
* Mongoose
* React-router-dom
* Nodemon
* JSON Web Token
* SASS
* Bulma CSS Framework
* Framer Motion
* Insomnia
* Mongo DB Compass

## Installation Instructions

* Open the server terminal and run npm I to install all dependencies from the package.json file.
* Run npm run dev in the server terminal to start the backend server.
* Open the client terminal and run npm I to install all dependencies from the package.json file.
* Run npm run dev from client terminal to launch the frontend.

## Planning

I’d had this idea on my idea list for a while and decided to use the period of relative inaction that surrounds the days of Christmas-which-aren’t-actually-Christmas to get my head round the concept.

I began by sketching out the patterns which were already familiar to me - Login/Register page,  item list page, individual item page, & user profile page - as I was planning to work on these first in order to refamiliarise myself with the technology. Essentially this is the building something you’re already familiar with in a language you’re not familiar with technique, but with a language I was already somewhat familiar with.

I sketched out a rough site design in Excalidraw to give me a rough map of the app flow:
<div align='center' display='inline'>
<img src='https://res.cloudinary.com/dvio5jxzq/image/upload/v1644328825/Index_co7vk3.png' height='300' width='500' />
<img src='https://res.cloudinary.com/dvio5jxzq/image/upload/v1644328836/Create_a_class_yndnic.png' height='300' width='500' />
</div>
<div align='center'>
<img src='https://res.cloudinary.com/dvio5jxzq/image/upload/v1644328829/Profile_x5byjk.png' height='300' width='500' />
</div>


I also decided on a development outline - aiming to build the app gradually from the ground up, making sure an individual component had complete functionality before moving on to another component. I feel this was the best approach because, as I was building this by myself, I was aware that I could easily become overwhelmed. This steady, brick by brick method meant that I would only ever be debugging one component at a time, and I would always know where I was heading, even if I was at times unsure how to proceed. I learned this lesson the hard way during my first attempt at building a MERN app in these technologies.

I sketched this method out into a broad timeline which looked like this:

### Back End

* Error handlers, logger and server start functions
* User model
* Weapon model
* Attachment model
* Created Class model
* Login and Register requests & routes
* Weapon requests & routes
* Class Creation requests & routes

### Front End

* Connection to backend
* Front end auth requests
* Front end database requests & routes
* Login and register page
* Index page
* Individual weapon page
* Class creation page
* User profile page
* Styling & animation

## Back End Development

### Models

As I was planning to make the class creation components out of both weapons and attachments, the most significant challenge in the back end would be deciding what those weapon and attachment models looked like.

Each COD: Warzone weapon has 13 base stats and (at the time of development) up to 6 damage over range profiles that those stats can fit into. For example, every weapon has a default damage profile which is set when the user either has no attachments on the weapon or when the user applies an attachment which does not affect that damage profile.

To use an in-game example, the user can apply an attachment (for example a Red Dot Sight), which applied by itself will provide a boost and-or penalty to the non-range stats, but won’t change that weapons base damage over range.

However an attachment which does change the range-stats can sometimes  affect the 13 base stats,  in most cases doesn’t.  Setting this complexity aside for a moment, I decided to focus on getting the range changing attachments right first as these were slightly different from the base stat changing attachments.

The range-stat attachments (including the default range stats) provide the baseline stats which the other non-range-stat attachments to modify. This means that the weapon model would need to account for range-stat-attachments. I chose a nested schema for up to six potential damage-range profiles (including the default, which applies when the weapon has no attachments), which themselves would have a nested schema for up to four potential damage ranges.

Expressed in models, the damage profile and damage ranges look like this:

 ```javascript
 const damageRangeSchema = new mongoose.Schema({
  rangeStart: { type: Number, required: false, default: 0 },
  rangeEnd: { type: Number, required: false, default: 25 },
  headDamage: { type: Number, required: false, default: 54 },
  neckDamage: { type: Number, required: false, default: 42 },
  chestDamage: { type: Number, required: false, default: 35 },
  stomachDamage: { type: Number, required: false, default: 35 },
  extremetiesDamage: { type: Number, required: false, default: 35 },
})

const damageProfileSchema = new mongoose.Schema({
  profileName: { type: String, required: false, default: 'Default' },
  fireRate: { type: Number, required: false, default: 630 },
  magSize: { type: Number, required: false },
  rangeOne: [damageRangeSchema],
  rangeTwo: [damageRangeSchema],
  rangeThree: [damageRangeSchema],
  rangeFour: [damageRangeSchema],
})
```

The damage range schema has a start range value and an end range value (these ranges are measured in in-game meters - e.g. 0 - 25 meters) and each range has damage values which correspond to parts of the player /enemy character  (head, chest, limbs, etc) within those ranges.

Player/enemy base health is 150, which means that if for example, a player is within 0 meters( the range start value) and 25 meters (the range end value), and the profile chest damage is 35, 5 chest shots will down an enemy player (5 x 35 breaks the 150 base health threshold).  Alternatively if head shots are 54 damage and the player/enemy is within the same range values, 3  shots will down the player (3 x 54 breaks the 150 base health threshold) .

These ranges and damage values are combined into an overall damage profile for the weapon (each profile can consist of up to four ranges, each containing 5 damage values each), and can be presented can be used alongside the base stats of that weapon. 

To make this clearer, on the front end, this means part of the individual weapon  profile will have a damage profile which looks like this:
<div align='center'>
<img src='https://res.cloudinary.com/dvio5jxzq/image/upload/v1644331963/ranges_xgpvma.png' width='700' height='auto'/>
</div>

Getting my head around this complexity was the most significant  development hurdle in the back end. As range altering attachments are more intrinsic to the weapon stats than attachment modifiers, I decided to nest them a part of the weapon model and not have them be attachments themselves.  I also had to do some research about nesting schemas as I had previously only used them as part of user models, and wasn’t sure to what extent they could be used:

```javascript
const weaponSchema = new mongoose.Schema({
  name: { type: String, required: false, unique: false, default: 'CR-56 AMAX' },
  weaponType: { type: String, required: false, unique: false, default: 'Assault Rifle' },
  image: { type: String, required: false, unique: false },
  buildImage: { type: String, required: false, unique: false},
  adsImage: { type: String, required: false, unique: false},
  gameFrom: { type: String, required: false, unique: false },
  adsTime: { type: Number, required: false, unique: false, default: 279  },
  sprintToFire: { type: Number, required: false, unique: false, default: 263  },
  movementSpeed: { type: Number, required: false, unique: false, default: 4.659  },
  bulletVelocity: { type: Number, required: false, unique: false, default: 587 },
  magSize: { type: Number, required: false, unique: false, default: 30 },
  strafeSpeed: { type: Number, required: false, unique: false, default: 2.83 },
  adsMovementSpeed: { type: Number, required: false, unique: false, default: 2.34 },
  tacSprintToFire: { type: Number, required: false, unique: false, default: 392 },
  hipfireArea: { type: Number, required: false, unique: false, default: 16.5 },
  reloadTime: { type: Number, required: false, unique: false, default: 2.25 },
  openBoltDelay: { type: Number, required: false, unique: false, default: 0 },
  sprintSpeed: { type: Number, required: false, unique: false, default: 6.2 },
  profileOne: [damageProfileSchema],
  profileTwo: [damageProfileSchema], 
  profileThree: [damageProfileSchema],
  profileFour: [damageProfileSchema], 
  profileFive: [damageProfileSchema],
  profileSix: [damageProfileSchema], 
})
```

### Attachment model

The attachment model was a lot simpler than the weapon model. Attachments affect base stats as either flat increases (I.e. take the affected stat and plus the number value) or percentage increase (e.g a 20% increase to the selected stat).

```javascript

const attachmentSchema = new mongoose.Schema({
  attachmentName: { type: String, required: false, unique: false },
  type: { type: String, required: false, unique: false },
  rangeModifier: { type: Number, required: false, unique: false },
  bulletVelocityModifier: { type: Number, required: false, unique: false },
  adsModifier: { type: Number, required: false, unique: false },
  verticalRecoil: { type: Number, required: false, unique: false },
  horizontalRecoil: { type: Number, required: false, unique: false },
  movementSpeed: { type: Number, required: false, unique: false },
  adsMovementSpeed: { type: Number, required: false, unique: false },
  sprintSpeed: { type: Number, required: false, unique: false },
  magSize: { type: Number, required: false, unique: false },
  hipfireArea: { type: Number, required: false, unique: false },
  sprintToFire: { type: Number, required: false, unique: false },
  tacSprintToFire: { type: Number, required: false, unique: false },
  reloadTime: { type: Number, required: false, unique: false },
  strafeSpeed: { type: Number, required: false, unique: false },
  fireRate: { type: Number, required: false, unique: false },
  weapons: { type: Array, required: false, unique: false }
}) 
```

As weapons share attachments (as in 1 attachment can be available for all weapons), I decided to, instead of having multiple database entries for the same attachment, have an array which contains weapon names. This means that in order to get every attachment for the weapon being customised, the attachments database can be filtered by this array, to return only those entries which have the weapon name in them.

### Requests and Routing

With the models finished the other significant part of back end development was making sure the routes were set up and responding correctly.

I divided the requests across three types: user requests (account setup, login and register),  requests relating to existing database entries (get all, get one, get user, update etc)  and requests relating to user generated database entires (create class, like class, delete class etc).

The create class request took the most testing as I had to make sure the request body was being received by the request as well as setting the added by field to the current user:

```javascript
async function classCreate(req, res) {
  const { currentUser } = req
  try {
    const newClass = await UserAddedClass.create({ ...req.body, addedBy: currentUser })
    console.log(req.body)
    return res.status(201).json(newClass)
  } catch (err) {
    console.log(err)
  }
}
```

The delete user weapon route also took a bit of time to get right, mainly because I had to make sure that it was giving the correct errors when the request was not authorised:

```javascript
async function deleteClass(req, res, next) {
  const { userWeaponId } = req.params
  const { currentUserId } = req
  try {
    const deleteWeapon = await UserAddedClass.findById(userWeaponId)
    if (!deleteWeapon) throw new NotFound()
  
    if (!deleteWeapon.addedBy.equals(currentUserId)) {
      throw new Unauthorized()
    }

    await deleteWeapon.remove()
    return res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}
```

### Connecting To The Front End

In my experience	so far, connecting to the Front End is the first big milestone in development. It means your app has been well set up and you can mostly move on from back end development.

Because I built slowly, and tested everything methodically, connecting to the front end was relatively simple and painless.

## Front End Development

A lot of the front end development was patterns I am reasonably familiar with and have detailed in previous projects. The main areas of focus for this project was therefore making sure the auth and user creation front end routes worked, and working out the logic of creating classes on the front end.

### Front End Routes

Having successfully set up front end routes in previous projects, I didn’t have too much trouble with this. The only things I needed to remember was that all requests requiring a user be authenticated need to be sent with a token (the headers function in the api.js file) , and if the request is creating an element from form data, that form data also needs to be sent with the request

For example:

```javascript
export function loginUser(formData) {
  return axios.post(`${baseUrl}/login`, formData)
}

export function getUser() {
  return axios.get(`${baseUrl}/profile`, headers())
}

export function editUser(userId, formData) {
  return axios.put(`${baseUrl}/profile/${userId}`, formData, headers())
}
```

### User Classes

This is the component which took the most time during front end development. A Warzone class has several different things to consider:

* The base weapon
* Up to 5 attachments relating to 9 potential attachment areas on the weapon
* The effects which those attachments have on the base stats
* the effects which those attachments have on the range stats

Every attachment will not affect every stat, and some stats are modified as a flat increase or decrease to the base, whereas other stats are moidified as a percentage increase or decrease of the base. The first thing to do was identify which stats are modified as flat increases/decreases and which were percentages increases/decreases.

### Percent Increases vs Flat Increases

Flat modifiers are relatively simple: you take the value from the attachment and you add or subtract it from the relevant base stats of the weapon.

For those which were percentage increases I used the following function to convert the modifier value into a percentage of the base stat. It accepts the value as an argument before performing logic around wether than number is positive or negative:

```javascript
  function percentConverter(percent) {
    let percentHandler = (percent / 100)
    if (percentHandler < 0 ) {
      return (100 - (percent * -1)) / 100
    } else if (percentHandler > 0) {
      return ((percentHandler / 100) * 100) + 1
    } else return percentHandler = 1
  }
  ```
  
If the function receives a negative number as an argument ( e.g. -20), its less than zero and therefore represents a percentage decrease. If the function recieves a positive number, it’s a percentage increase. Therefore -20 will return 0.8 as a modifier and 20 will return 1.20. All other instances (either none existant or zero) will return a modifier of 1 (which is basically no modifier).

This can then be used to apply to the percentage stats like so:

```javascript
  <h3>Bullet Velocity: {(weapon.bulletVelocity * percentConverter(sumBulletVel)).toFixed(2)}</h3>
  <h3>Hipfire Area: {(weapon.hipfireArea * percentConverter(sumHipFire)).toFixed(2)}</h3>
```

### Attchment Type State Values

Every attachment is applied to one of 9 specific areas of the weapon, and every attachment in those 9 areas has the potential to affect each of the 13 base stats, therefore I made 13 state objects corresponding to each of these stats, each having 9 key value pairs corresponding to each of the 9 weapon areas:

The following is from the reload time state object:

```javascript
  const [reloadTime, setReloadTime] = React.useState({
    muzzleReload: 0,
    laserReload: 0,
    barrelReload: 0,
    opticReload: 0,
    stockReload: 0,
    underBarrelReload: 0,
    perkReload: 0,
    ammoReload: 0,
    gripReload: 0,
  })
  ```
  
 Each	key value pair relates to one of the 9 attachment types. For example, muzzleReload relates to any reload modifier the muzzle attachment might have. If there is no modifier, then nothing gets added. In order to turn this into number which can be applied to the base stat, I’ve used the object method values along with the reduce method to turn all the values into a number:
 
 ```javascript
   const sumReloadTime = Object.values(reloadTime).reduce( (a, b) => a + b, 0)
   ```
 
 This gets applied to the related base stat like so:
 
 ```javascript
 <h3>Reload Time: {weapon.reloadTime + sumReloadTime}</h3>
 ```
 
 ### Getting and Applying Attachments
 
 All of the attachment components follow roughly the same logic, so I’ll highlight one here , but all 9 functions are similar. The following is a walktrhough of the GripFunctions.js file:
 
 ```javascript
   function getGrip() {
    if (attachments && weapon) {
      return attachments.filter(
        attachment => {
          return attachment.weapons.includes(weapon.name) && attachment.type === 'Rear Grip'
        }
      )
    }
    return 0
  }
  ```
  
This function finds all attachments which have the weapon name stored in the weapons array and filters them by there attachment type. This means that only attachments of the weapons name and the type ‘rear grip’ appear in the Rear Grip section. Then we have to see which stats the selected attachment affects, and to do this I used an If function which took into account every possible weapon stat:

```javascript
function oneGrip(e) {
    if (attachments && weapon && e.target.innerHTML !== 'Select Grip') {
      const selectedGrip = attachments.filter(
        attachment => {
          return  attachment.weapons.includes(weapon.name) && attachment.attachmentName.includes(e.target.innerHTML)
        }
      )
      if (selectedGrip[0].adsModifier){
        setAdsModifier(
          { ...adsModifier, gripAds: selectedGrip[0].adsModifier }
        )
      } else (adsModifier.gripAds = 0)

      if (selectedGrip[0].rangeModifier){
        setRangeModifier({
          ...rangeModifier, gripRange: selectedGrip[0].rangeModifier,
        })
      } else (rangeModifier.gripRange = 0)

      if (selectedGrip[0].bulletVelocityModifier) {
        setBulletVelMod({
          ...bulletVelMod, gripVel: selectedGrip[0].bulletVelocityModifier,
        })
      } else (bulletVelMod.gripVel = 0)

      if (selectedGrip[0].verticalRecoil) {
        setVertRecoil({
          ...vertRecoil, gripVert: selectedGrip[0].verticalRecoil,
        })
      } else (vertRecoil.gripVert = 0)

      if (selectedGrip[0].horizontalRecoil) {
        setHorizRecoil({
          ...horizRecoil, gripHoriz: selectedGrip[0].horizontalRecoil,
        })
      } else (horizRecoil.gripHoriz = 0)

      if (selectedGrip[0].movementSpeed) {
        setMovSpeed({
          ...movSpeed, gripMov: selectedGrip[0].movementSpeed,
        })
      } else (movSpeed.gripMov = 0)

      if (selectedGrip[0].adsMovementSpeed) {
        setAdsMovSpeed({
          ...adsMovSpeed, gripAdsMov: selectedGrip[0].adsMovementSpeed,
        })
      } else (adsMovSpeed.gripAdsMov = 0 )

      if (selectedGrip[0].sprintSpeed) {
        setSprintSpeed({
          ...sprintSpeed, gripSprintSpeed: selectedGrip[0].sprintSpeed,
        })
      } else (sprintSpeed.gripSprintSpeed = 0)

      if (selectedGrip[0].hipfireArea) {
        setHipFire({
          ...hipFire, gripHipFire: selectedGrip[0].hipfireArea,
        })
      } else (hipFire.gripHipFire = 0)

      if (selectedGrip[0].sprintToFire) {
        setSprintToFire({
          ...sprintToFire, gripSprintToFire: selectedGrip[0].sprintToFire,
        })
      } else (sprintToFire.gripSprintToFire = 0)

      if (selectedGrip[0].tacSprintToFire) {
        setTacSprint({
          ...tacSprint, gripTacSprint: selectedGrip[0].tacSprintToFire,
        })
      } else (tacSprint.gripTacSprint = 0)

      if (selectedGrip[0].reloadTime) {
        setReloadTime({
          ...reloadTime, gripReload: selectedGrip[0].reloadTime,
        })
      } else (reloadTime.gripReload = 0)

      if (selectedGrip[0].strafeSpeed) {
        setStrafe({
          ...strafe, gripStrafe: selectedGrip[0].strafeSpeed,
        })
      } else (strafe.gripStrafe = 0)

      return selectedGrip
    } 
    return 0
  }
  ```
  
 Here, as it’s not known if the attachment has modifiers relating to every stat, we check to see if the array relating to that stat is true (populated with a value) or false (non existent or empty). If it is true/populated, we paste in the corresponding state object along with the updated stat value. If it's false/non existant we set the stat value to 0.
 
 This is essentially the method I used to update multiple different stats across multiple different areas.
 
 
### Attachment Limits and Build Creation

In Warzone, a weapon only has 5 available attachments slots, which can be filled with an attachment of the 9 different attachment types. These attachments can be of any combination, the only limits being one attachment of each type per weapon, and the total number of attachments can't exceed 5. 

To achieve this, I created a new array from the formData object.  This converted the formData object into an array of it’s key value pairs, which I then filtered by the keys or values I needed:

```javascript
  const attachArray = Object.entries(formData).filter(
    keys => {
      return keys[1] !== null 
      && keys[1] !== 'None'
      && keys[1] !== 'Default' 
      && keys[0] !== 'gunName' 
      && keys[0] !== 'gameFrom' 
      && keys[0] !== 'image' 
      && keys[0] !== 'weaponType' 
      && keys[0] !== 'adsTime'
      && keys[0] !== 'buildImage'  
      && keys[0] !== 'name'  
    }
  ).map(
    key => {
      return key[0]
    }
  )
  ```
  
Anything with keys[0] were key value pairs I wanted to exclude entirely as these are the parts of the form data which don't represent attachments. Similarly anything with keys[1] was a key value pair I wanted to exclude only if they held a certain value (either ’none’, ‘null’ or ‘Default’).

I then mapped only the key names (key[0], which after the filtering can only include attachment types with a value that isn't 'none', null or 'default') into an array, which I could then use in the attachment type component to change the view based on the length of this mapped array:
 
 ```javascript
 <button className='button is-black select-attachment-button'>Grip</button>
      { attachments && ((formData.rearGrip === 'None' && attachArray.length <= 4) || (formData.rearGrip !== 'None')) &&
<select className='dropdown button select-attachment'
  onChange={handleChange}
  name="rearGrip">
  ```
  
Here, the select attachment dropdown will only appear on the page if the value of the attachment mapped attachment array length is less than or equal to 4, or that the value of the attachment is not ‘None’. 

However, if the value of the attachment is ‘None’ and the attachment array is greater than 4, this means that the 5 attachment limit has been met, and nothing from this attachment type has been selected. Therefore the dropdown is then hidden and replaced with a static value ‘Unavailable’:

```javascript
 { attachments && (formData.rearGrip === 'None' && attachArray.length > 4) &&
      <select className='dropdown button unavailable'
        name='rearGrip'>
        <option>Unavailable</option>

      </select>
```
However , the dropdown for attachments which are not ‘None’ and populated with an attachment value remain visible and usable, as this means, as to set them back to none will remove them from attachArray (as it filters out all values that are ‘None’), meaning attachment array is now not greater than 4, so the previously Unavailable attachment types become selectable again.

In practice, this means that a weapon with 5 attachments looks like this:

<div align='center'>

<img src='https://res.cloudinary.com/dvio5jxzq/image/upload/v1644336666/Screenshot_2022-02-08_at_16.10.36_dbk4r1.png' />
 </div>
 
 ### Creating the build

Once all attachments have been added, we send the formData along with the object id and authorisation headers to our back end, which adds it to the User Created Weapon database, with the created by field added as the current user.

```javascript
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await createAClass(weaponId, formData)
      console.log('data here', data)
      navigate(`/weapons/${weaponId}`)
    } catch (err) {
      console.log(err)
      setIsError(err)
    }
  }
  ```
## App Images

 <img src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1644350781/Screenshot_2022-02-08_at_19.42.16_eoe5o2.png" name="image-name">
 <img src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1644350851/Screenshot_2022-02-08_at_19.48.06_dgou6z.png" name="image-name">
 <img src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1644350651/Screenshot_2022-02-08_at_19.50.22_bj486x.png" name="image-name">
 <img src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1644350947/Screenshot_2022-02-08_at_19.52.17_d2q2sr.png" name="image-name">
 <img src="https://res.cloudinary.com/dvio5jxzq/image/upload/v1644351028/Screenshot_2022-02-08_at_19.53.23_r9howh.png" name="image-name">
 
 
## Challenges

The most significant challenge was working out the logic of class creation. There were so many variables to take into account, along with working out how to apply both negative and positive percent increases to stats.  This is a feature which went back to the drawing board several times.


The logic around the 5 attachment limit took the longest time to work out,  particularly how to turn the formData object into an array which I could consequently filter and map.


In my create a class functions, I’m not particularly happy with my use of  long if functions - it seems a bit manual and over-long. One solution would be to give every attachment a value for every base stat, and if it doesn’t effect a stat, set that value at 0. That way I wouldn’t have to check that array exists before applying it, and I could just have pasted the object in. Sadly I worked this out long after I’d completed this component and filled out the database.

I also had to learn how to use react-router-dom v6, but this was made largely easy due to reading the docs. The one thing I couldn’t get working however was the Secure Route functionality - the syntax for a secure route (nesting the component that you want securing within the secure route component itself) didn’t work for me, so in the end I achieved some level of secure routing by other means.

## Wins

Learning about object methods was the biggest win - this is what allowed me to implement the more complex elements of this app.

I also finally began to understand the use case for spreading objects, whereas  it had previously been something I wasn’t sure of. As I now understanding it, spreading the object is used for updating a specific key value pair, whilst also maintaining the values of the other key value pairs.

This was also the first time I’d tried some responsive design in CSS. The principles make a lot more sense to me than they did previously, although I’m still a bit unsure as to what to screen sizes to design for. As it stands, I designed for a 27 inch monitor, a 13 inch monitor and an iPhone 11.

Once again, this project solidified the value of a methodical , test driven approach to ensure you’re only ever worrying about the functionality of one component at a time.

## Known Bugs

There is sometimes a visual issue with some of the pages on smaller laptop screens - Im not sure if this is CSS or the browser or both. For now if you get these visual bugs, please refer to the screenshots for the intended experience.

Mobile view is designed for iPhone 11, so looks too big on smaller screens and doesn’t show on something like the Samsung Galaxy S9 (which I tested it on). Not strictly a bug, but worth noting if you’re viewing the mobile view on a device other than iPhone 11.

## Key Learnings

This was the first time I’ve build a full stack MERN app entirely by myself so seeing the whole process from start to finish helped me a lot. Running back a lot of the familiar patterns which I learned at GA (show all, show one etc)  was good practice and a great excuse to get some reps in.

I have a better understanding of authorised vs non authorised requests as well as requests which create database entries from form data. Previous to this project my understanding was still a litter murky, however now I realise that they just operate much like regular functions which receive form data or headers as an argument.

I also learned a lot about how to use form data to construct an object from two separate objects, as well as how to use object methods to transform objects into other data types.

This was also my first serious attempt at responsive design, although this has mostly left me with a sense that I need to dedicate more time to it . I’m still unsure as to how to approach it seeing as screen size is so variable between different phones and different laptops.

## Future Features
Purely due to time constraints I only had time to add Modern Warfare & Cold War weapons, and Modern Warfare attachments. In future I’ll add the missing data from Cold War and all of the data from Vanguard.


## Personal Notes

This project was completed with emotional support from Dry January, Skyward Sword on Nintendo Switch and the following albums:

<div align='left'>
  <img src='https://res.cloudinary.com/dvio5jxzq/image/upload/v1644337284/topsters2_3_abnjfq.png' height='500' width='auto' />
</div>
 

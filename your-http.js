/**********YOUR-HTTP PROJECT**********/
// CREATED FOR HELPING PEOPLE
// DONT SELL THIS ANTI DDOS
// TOOLS CREATED AND ORIGINAL WRITTED BY FreenzySG
// Source Is 100% from FreenzySG
// RTTEX. Support, PNG, IMG, HASH ANYTHING FUCKED
/**********YOUR-HTTP PROJECT**********/

/********** CUSTOM ITEM **********/
const fs = require('fs');
const tanggal = new Date();
const gradient = require('gradient-string')
let watermark = `
=============================================================================

██╗   ██╗ ██████╗ ██╗   ██╗██████╗     ██╗  ██╗████████╗████████╗██████╗ 
╚██╗ ██╔╝██╔═══██╗██║   ██║██╔══██╗    ██║  ██║╚══██╔══╝╚══██╔══╝██╔══██╗
 ╚████╔╝ ██║   ██║██║   ██║██████╔╝    ███████║   ██║      ██║   ██████╔╝
  ╚██╔╝  ██║   ██║██║   ██║██╔══██╗    ██╔══██║   ██║      ██║   ██╔═══╝ 
   ██║   ╚██████╔╝╚██████╔╝██║  ██║    ██║  ██║   ██║      ██║   ██║     
   ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚═╝     
                                                                         
=============================================================================`

// ANTI-BUG AND ANTI-CHEAT MODE
var anticheat = "anti-cheat";
// detect files/dir
if(fs.existsSync('./interface')) {
if(fs.existsSync('online_count.txt')) {

// Load HTML
function htmls () {
  const fs2 = require('fs');
  const datahtml = fs2.readFileSync('./http.html','utf8')
}

/*** COMPONENTS ***/
const fs = require('fs')
const dataOnline = fs.readFileSync('./online_count.txt', 'utf8')
const rug = require('random-username-generator')
const newUser = rug.generate();
const gradient = require('gradient-string');
const http = require('http')
var blacklist = new Map();
let tanggal = new Date();
const title = require('console-title')
title(`${tanggal} - YourHTTP is Running`)

// ASCII
let serverup = `
===============================================================================================
                                           
UUUUUUUU     UUUUUUUU     PPPPPPPPPPPPPPPPP   
U::::::U     U::::::U     P::::::::::::::::P  
U::::::U     U::::::U     P::::::PPPPPP:::::P 
UU:::::U     U:::::UU     PP:::::P     P:::::P
 U:::::U     U:::::U        P::::P     P:::::P
 U:::::D     D:::::U        P::::P     P:::::P
 U:::::D     D:::::U        P::::PPPPPP:::::P 
 U:::::D     D:::::U        P:::::::::::::PP  
 U:::::D     D:::::U        P::::PPPPPPPPP    
 U:::::D     D:::::U        P::::P            
 U:::::D     D:::::U        P::::P            
 U::::::U   U::::::U        P::::P            
 U:::::::UUU:::::::U      PP::::::PP          
  UU:::::::::::::UU       P::::::::P          
    UU:::::::::UU         P::::::::P          
      UUUUUUUUU           PPPPPPPPPP          
                                              
================================================================================================`

let watermark = `
=============================================================================

██╗   ██╗ ██████╗ ██╗   ██╗██████╗     ██╗  ██╗████████╗████████╗██████╗ 
╚██╗ ██╔╝██╔═══██╗██║   ██║██╔══██╗    ██║  ██║╚══██╔══╝╚══██╔══╝██╔══██╗
 ╚████╔╝ ██║   ██║██║   ██║██████╔╝    ███████║   ██║      ██║   ██████╔╝
  ╚██╔╝  ██║   ██║██║   ██║██╔══██╗    ██╔══██║   ██║      ██║   ██╔═══╝ 
   ██║   ╚██████╔╝╚██████╔╝██║  ██║    ██║  ██║   ██║      ██║   ██║     
   ╚═╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚═╝     
                                                                         
=============================================================================`
/** header **/
/*** Load Files ***/
const readline = require('readline');
const Cryptr = require('cryptr')
const cryptr = new Cryptr('myTotalySecretKey')
var rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const {
    Webhook
} = require('discord-webhook-node')

/*** load your webhook ***/
const { headerWeb, bodyWeb, tokenWeb } = require('./webhook.json');
const { headerWeb1, bodyWeb1, tokenWeb1 } = require('./webhook1.json'); 
/*** ENCRYPT DECRYPT ***/ 
// encrypt the Webhook
let headerEnc = cryptr.encrypt(headerWeb);
let bodyEnc = cryptr.encrypt(bodyWeb);
let tokenEnc = cryptr.encrypt(tokenWeb);

// decrypt the webhook
let headerDec = cryptr.decrypt(headerEnc);
let bodyDec = cryptr.decrypt(bodyEnc);
let tokenDec = cryptr.decrypt(tokenEnc);

/*** create the webhook one ***/
const webhookMsg = new Webhook("" + headerDec + bodyDec + tokenDec + "")
const privateweb = new Webhook("" + headerWeb1, bodyWeb1, tokenWeb1 + "")
let saveall = "Done.";

/*** THE OTP FUNCTION ***/
function frenzyOTP(len) {
  var str = "";                          
  for (var i = 0; i < len; i++) { // Loop the len
    /*** GENERATE THE OTP ***/
    var rand = Math.floor(Math.random() * 62);
    var charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48; 
    str += String.fromCharCode(charCode);  // (function))    
  }
// then => returned
  return str; // (str) the function
}
/*** Example : frenzyOTP( NUMBER )) ***/
// Use : frenzyOTP(6) Normal OTP is 6 Words
/*** make let for Readline function ***/
let otpFunction = frenzyOTP(6); // You can set the number/words as you like
/*** Send the OTP Code ***/
webhookMsg.send("```js\nfunction new_otp () {\nconst username = "+ newUser + "\nconst code = "+ otpFunction + "\nsend_otp();\n}```");
/*** GAVE THEY NOTIFICATIONS ***/
console.log(gradient.rainbow(watermark))
console.log(`[STRUCT] Your Usernames : ${newUser} remember thats.`)
console.log("[+] OTP Code has been sended to the Discords Servers")
console.log(" ")
console.log("[ - ] dsc.gg/your-http")
console.log("[ - ] t.me/frenzycomunity")
console.log(" ")
console.log("[+] Notes Before Use : ")
console.log("If you get bugs in Auto-Save, server name not changed/developer name not changed, you can un-register by writting 'n' in Auto-Save pages.")
rl.question("[TEXT-INPUT] Enter the OTP : ", rlOtp => {
  // Anti-Cheat
  if(rlOtp == "") {
    console.log("Please enter the otp :3") // They's trying to cheating.
  } else {
    // OTP Detect.
    if(rlOtp == otpFunction || rlOtp == "bypass" || rlOtp == "admin") { // 'bypass' is admin bypass password's. you can change it:)
      console.clear(); // Clearr the Trash.
    // Search, They have a Account? if Yes we will Say 'Welcome-Back'
      if(fs.existsSync('save.json')) { // Save.json finder.
        const { ServersName, Developer, Servers, discordlink, hostlink } = require('./save.json')
        console.log("[STRUCT] Welcome Back!") // They backs.
        console.log(`[TEXT] We detected your saved servers ${ServersName} develop by ${Developer}`)
        console.log("[TEXT] Want to active the HTTP now?")
        // console.log("If you get bugs in Auto-Save, server name not changed/developer name not changed, you can un-register by writting 'n' in Auto-Save pages.")
        console.log("[STRUCT] 'y' to YES, 'n' to un-register")
        title("Your HTTP - Selection") // Get title.
        rl.question("> ", nyalaGak => {
          if(nyalaGak == "y" || nyalaGak == "Y") { // They save is founded. want to Countinue?.
// we make the first HTML's.
const htmlnya = `
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- My CSS -->
    <link rel="stylesheet" href="style.css">

  <title>${ServersName}</title>
  </head>
  <body>
      <!-- Jumbotron -->
      <div class="jumbotron text-center">
          <img src="https://c.tenor.com/7HITBy-s_zAAAAAC/popcorn.gif?width=677&height=675" alt="Server Logo" width="200" class="rounded-circle img-thumbnail">
        <h1 class="display-4">${ServersName}'s: The Growtopia Private Servers</h1>
        <p class="lead">${ServersName}'s Develop by ${Developer} is UP</p>
        <p class="lead">${dataOnline} people is online right now (Last-Edited)</p>
        <br>
        <a class="btn" href="${hostlink}" role="button" style="background-color: rgb(255, 255, 255);">Play ${ServersName}</a>&nbsp;
        <a class="btn" href="${discordlink}" role="button" style="background-color: rgb(255, 255, 255);">${ServersName} discord</a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,165.3C672,149,768,171,864,186.7C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <!-- About Us -->
      <section id="#about">
        <div class="container">
                <div class="row text-center mb-3">
                  <div class="col">
                    <h2 >About Us</h2>
                  </div>
                </div>
                <div class="row justify-content-center fs-5 text-center">
                    <div class="col-4">
                        <p>${ServersName} is up! go player and download the host by clicking the buttons!</p>
                    </div>
                    <div class="col-4">
                        <p>A cool Growtopia Private Servers " ${ServersName} " and Develop by ${Developer} there is so many features! and currently ${dataOnline} player online!</p>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9c9e9e" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,160C672,139,768,149,864,138.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>
      <!-- End About Us -->

<!-- why -->
      <section id="#why">
        <div class="container">
                <div class="row text-center mb-3">
                  <div class="col">
                    <h2 >Why ${ServersName}</h2>
                  </div>
                </div>
                <div class="row justify-content-center fs-5 text-center">
                    <div class="col-4">
                        <p>${ServersName} is the best server, with the best community. You will also be safe if you play this server, because this server is encrypted! Good!, our developers (${Developer}) also respond to other people's calls and of course this server is always updated following Growtopia Original.</p>
                    </div>
                    <div class="col-4">
                    <a class="btn" href="${hostlink}" role="button" style="background-color: rgb(255, 255, 255);">Play ${ServersName}</a>&nbsp;
        <a class="btn" href="${discordlink}" role="button" style="background-color: rgb(255, 255, 255);">${ServersName} discord</a>
        </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9c9e9e" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,160C672,139,768,149,864,138.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>
      <!-- End About Us -->

      <!-- Footer -->
      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3" style="background-color: rgb(220, 217, 221);">
          Copyright ${Developer} 2021 All Right Reserved.
          <a class="text-dark" href="${discordlink}">${ServersName}'s discord servers</a>
        </div>
      </footer>
      <!-- End of Footer -->
  </body>
</html>
` // HTMLS CODE.
            console.clear();
            title("Your HTTP - Running - saweria.co/FrenzyS6")
console.log(gradient.rainbow(watermark))
console.log("[-] saweria.co/FrenzyS6")
const dir = "./interface/";
fs.readdir(dir, (err, files) => {
    if (err) {
        throw err;
    }

    // files object contains all files names
    // log them on console
    files.forEach(file => {
        fs.writeFileSync(
          "_interface_your_http.txt",
          `${files}`
        )
    });
    console.log("[STRUCT] Interface.txt created! owo.")
    console.log(`[TEXT] Servers Running in ${Servers}`)
    console.log(`[STRUCT] Listening to https://${Servers}`)
});

const client = http.createServer(function(req, res) {
    let ipAddress = req.connection.remoteAddress;
    ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
    var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
        //req.connection.destroy();
    if (req.url == "/growtopia/server_data.php") {
        if (req.method = "POST") {
            visit++;
            res.write(htmlnya);
            res.end();
            console.log(`${tanggal}
[+] Ip Address : ${ipAddress}              
[+] Sending req : ${req.method}
[+] Status : Growtopia
[+] Traffic : Accepted.
[+] Receive (80) : 0`);
            console.log("[FS] Logs Writted")
            fs.appendFileSync(
              "_your.http.txt",
              `\n${ipAddress} ${req.method} Growtopia\n`)
        } else {
         res.write(htmlnya);
            res.end();
            console.log(`${tanggal}
[+] Ip Address : ${ipAddress}              
[+] Sending req : ${req.method}
[+] Status : Growtopia
[+] Traffic : Accepted.
[+] Receive (80) : 0`);
            console.log("[FS] Logs Writted")
            fs.appendFileSync(
              "_your.http.txt",
              `\n${ipAddress} ${req.method} Undifined\n`)
        }
    }
    else {
       console.log(`${tanggal}
[+] Ip Address : ${ipAddress}              
[+] Sending req : ${req.method}
[+] Status : Non-Growtopia
[+] Traffic : Blocked.
[+] Receive (80) : 0`);
            console.log("[FS] Logs Writted")
            fs.appendFileSync(
              "_your.http.txt",
              `\n${ipAddress} ${req.method} Non-Growtopia\n`)
        res.writeHead(200, "dsc.gg/your-http");
        res.write(htmlnya);
        res.end();
        //res.destroy();
    }
}) // TO DO : PLAY SONG =
client.listen(80)
          } else {
            // console.log("Stopping...")
            if(nyalaGak == "N" || nyalaGak == "n" || nyalaGak == "logout") { // They wanted to 'logout' :d 
              const anjay = './save.json'; // save.json files
              fs.unlinkSync(anjay) // Then Unlink(delete) cause he wanted to 'LOGOUT'
              console.log(watermark)
          console.log("[STRUCT] Welcome New User!")
          console.log("[TEXT] Looks like you're new user, so lets register!")
          rl.question("Enter Your Name : ", namadia => {
            if(namadia == "") {
              console.log("You need a name.")
            } else {
              rl.question("Enter your servers name : ", ServerNama => {
                if(ServerNama == "") {
                  console.log("idk, you need a servers name.")
                } else {
                  rl.question(`Enter ${ServerNama} IP : `, Servers => {
                    if(Servers == "") {
                      console.log("need ip.")
                    } else {
                      console.log(`[STRUCT] We need host link ${ServerNama}'s for Website`)
                      rl.question("Enter your host download link : ", hostlink1 => {
                        if(hostlink1 == "") {
                          console.log("bad if you not answered thats.")
                        } else {
                          rl.question("Enter your servers discord link : ", discordserver1 => {
                            if(discordserver1 == "") {
                              console.log("blank?")
                            } else {
                              // REGISTER SUCCES
                              // Done. - Now do a. ->
                      console.clear();
                      console.log(watermark)
                      const dir = "./interface/";
                      if(fs.existsSync('./interface')) {
                      fs.readdir(dir, (err, files) => {
    if (err) {
        throw err;
    }
    /********** FreenzySG **********/
    // to do :
    // c items, rttex, online counts
    /*******************************/
    // files object contains all files names
    // log them on console
    /*******************************/
    files.forEach(file => {
        fs.writeFileSync(
          "_interface_your_http.txt",
          `${files}`
        )
    });
    console.log("[STRUCT] Interface.txt created! owo.")
});
if(fs.existsSync('online_count.txt')) {
const dataOnline = fs.readFileSync('./online_count.txt', 'utf8')
} else {
  // Let it blank.
}
                      } else {
                        console.log("We cannot read your interface,game folder. put it here")
                        tittle('Process Failed to Executed. Contact FreenzySG if Still happened.')
      console.log(gradient.rainbow('Press any key to countinue...'))
  // Press anykey system.
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
  // Press anykey system.
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
                      }
                      fs.writeFileSync(
                        "save.json",
                        `{
  "Servers": "${Servers}",
  "ServersName": "${ServerNama}",
  "Developer": "${namadia}",
  "DiscordLink": "${discordserver1}",
  "HostLink": "${hostlink1}"
}`
                      )
console.log(gradient.rainbow(serverup));
console.log("[-] saweria.co/FrenzyS6")
console.log("[STRUCT] Interface.txt created! owo.")
const { ServersName, Developer, discordlink, hostlink } = require('./save.json')
console.log(`[TEXT] Servers Running in ${Servers}`)
console.log(`[STRUCT] Listening to https://${Servers}`)
const client = http.createServer(function(req, res) {
  // get ip
    let ipAddress = req.connection.remoteAddress;
    ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
    var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
        //req.connection.destroy();
    if (req.url == "/growtopia/server_data.php") {
        if (req.method = "POST") {
            visit++;
            // Make the htmls
            res.writeHead(200, "dsc.gg/your-http");
            res.end();
            console.log(`[DATE] ${tanggal}
[+] Ip Address : ${ipAddress}              
[+] Sending req : ${req.method}
[+] Status : Growtopia
[+] Traffic : Accepted.
[+] Receive (80) : 0`);
            console.log("[FS] Logs Writted")
           fs.appendFileSync(
              "_your.http.txt",
              `\n${ipAddress} ${req.method} Growtopia\n`)
        } else {
          const { ServersName, Developer, Servers, HostLink, DiscordLink } = require('./save.json')
const htmlnya = `
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- My CSS -->
    <link rel="stylesheet" href="style.css">

  <title>${ServersName}</title>
  </head>
  <body>
      <!-- Jumbotron -->
      <div class="jumbotron text-center">
          <img src="https://c.tenor.com/7HITBy-s_zAAAAAC/popcorn.gif?width=677&height=675" alt="Server Logo" width="200" class="rounded-circle img-thumbnail">
        <h1 class="display-4">${ServersName}'s: The Growtopia Private Servers</h1>
        <p class="lead">${ServersName}'s Develop by ${Developer} is UP</p>
        <p class="lead">${dataOnline} people is online right now (Last-Edited)</p>
        <br>
        <a class="btn" href="${hostlink}" role="button" style="background-color: rgb(255, 255, 255);">Play ${ServersName}</a>&nbsp;
        <a class="btn" href="${discordlink}" role="button" style="background-color: rgb(255, 255, 255);">${ServersName} discord</a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,165.3C672,149,768,171,864,186.7C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <!-- About Us -->
      <section id="#about">
        <div class="container">
                <div class="row text-center mb-3">
                  <div class="col">
                    <h2 >About Us</h2>
                  </div>
                </div>
                <div class="row justify-content-center fs-5 text-center">
                    <div class="col-4">
                        <p>${ServersName} is up! go player and download the host by clicking the buttons!</p>
                    </div>
                    <div class="col-4">
                        <p>A cool Growtopia Private Servers " ${ServersName} " and Develop by ${Developer} there is so many features! and currently ${dataOnline} player online!</p>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9c9e9e" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,160C672,139,768,149,864,138.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>
      <!-- End About Us -->

<!-- why -->
      <section id="#why">
        <div class="container">
                <div class="row text-center mb-3">
                  <div class="col">
                    <h2 >Why ${ServersName}</h2>
                  </div>
                </div>
                <div class="row justify-content-center fs-5 text-center">
                    <div class="col-4">
                        <p>${ServersName} is the best server, with the best community. You will also be safe if you play this server, because this server is encrypted! Good!, our developers (${Developer}) also respond to other people's calls and of course this server is always updated following Growtopia Original.</p>
                    </div>
                    <div class="col-4">
                    <a class="btn" href="${hostlink}" role="button" style="background-color: rgb(255, 255, 255);">Play ${ServersName}</a>&nbsp;
        <a class="btn" href="${discordlink}" role="button" style="background-color: rgb(255, 255, 255);">${ServersName} discord</a>
        </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9c9e9e" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,160C672,139,768,149,864,138.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>
      <!-- End About Us -->

      <!-- Footer -->
      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3" style="background-color: rgb(220, 217, 221);">
          Copyright ${Developer} 2021 All Right Reserved.
          <a class="text-dark" href="${discordlink}">${ServersName}'s discord servers</a>
        </div>
      </footer>
      <!-- End of Footer -->
  </body>
</html>
` // HTMLS CODE.
          res.writeHead(200, "dsc.gg/your-http");
        res.write(htmlnya1);
            res.end();
            console.log(`${tanggal}
[+] Ip Address : ${ipAddress}              
[+] Sending req : ${req.method}
[+] Status : Growtopia
[+] Traffic : Accepted.
[+] Receive (80) : 0`);
            console.log("[FS] Logs Writted")
            fs.appendFileSync(
              "_your.http.txt",
              `\n${ipAddress} ${req.method} Growtopia`)
        }
    }
    else {
      const { ServersName, Developer, Servers, HostLink, DiscordLink } = require('./save.json')
                const htmlnya1 = `
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- My CSS -->
    <link rel="stylesheet" href="style.css">

  <title>${ServersName}</title>
  </head>
  <body>
      <!-- Jumbotron -->
      <div class="jumbotron text-center">
          <img src="https://c.tenor.com/7HITBy-s_zAAAAAC/popcorn.gif?width=677&height=675" alt="Server Logo" width="200" class="rounded-circle img-thumbnail">
        <h1 class="display-4">${ServersName}'s: The Growtopia Private Servers</h1>
        <p class="lead">${ServersName}'s Develop by ${Developer} is UP</p>
        <p class="lead">${dataOnline} people is online right now (Last-Edited)</p>
        <br>
        <a class="btn" href="${hostlink}" role="button" style="background-color: rgb(255, 255, 255);">Play ${ServersName}</a>&nbsp;
        <a class="btn" href="${discordlink}" role="button" style="background-color: rgb(255, 255, 255);">${ServersName} discord</a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,165.3C672,149,768,171,864,186.7C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <!-- About Us -->
      <section id="#about">
        <div class="container">
                <div class="row text-center mb-3">
                  <div class="col">
                    <h2 >About Us</h2>
                  </div>
                </div>
                <div class="row justify-content-center fs-5 text-center">
                    <div class="col-4">
                        <p>${ServersName} is up! go player and download the host by clicking the buttons!</p>
                    </div>
                    <div class="col-4">
                        <p>A cool Growtopia Private Servers " ${ServersName} " and Develop by ${Developer} there is so many features! and currently ${dataOnline} player online!</p>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9c9e9e" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,160C672,139,768,149,864,138.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>
      <!-- End About Us -->

<!-- why -->
      <section id="#why">
        <div class="container">
                <div class="row text-center mb-3">
                  <div class="col">
                    <h2 >Why ${ServersName}</h2>
                  </div>
                </div>
                <div class="row justify-content-center fs-5 text-center">
                    <div class="col-4">
                        <p>${ServersName} is the best server, with the best community. You will also be safe if you play this server, because this server is encrypted! Good!, our developers (${Developer}) also respond to other people's calls and of course this server is always updated following Growtopia Original.</p>
                    </div>
                    <div class="col-4">
                    <a class="btn" href="${hostlink}" role="button" style="background-color: rgb(255, 255, 255);">Play ${ServersName}</a>&nbsp;
        <a class="btn" href="${discordlink}" role="button" style="background-color: rgb(255, 255, 255);">${ServersName} discord</a>
        </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9c9e9e" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,160C672,139,768,149,864,138.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>
      <!-- End About Us -->

      <!-- Footer -->
      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3" style="background-color: rgb(220, 217, 221);">
          Copyright ${Developer} 2021 All Right Reserved.
          <a class="text-dark" href="${discordlink}">${ServersName}'s discord servers</a>
        </div>
      </footer>
      <!-- End of Footer -->
  </body>
</html>
` // HTMLS CODE.
       console.log(`${tanggal}
[+] Ip Address : ${ipAddress}              
[+] Sending req : ${req.method}
[+] Status : Non-Growtopia
[+] Traffic : Blocked.
[+] Receive (80) : 0`);
            console.log("[FS] Logs Writted")
            fs.appendFileSync(
              "_your.http.txt",
              `\n${ipAddress} ${req.method} Non-Growtopia\n`)
    
       res.writeHead(200, "dsc.gg/your-http");
        res.write(htmlnya1);
        res.end();
        //res.destroy();
    }
})
client.listen(80)
                    }
                  })
                }
              })
            }
          })
    }
                          })
                        }
                      })
            }
          }
        })
      } else {
        if (fs.existsSync('items.dat')) {
          console.log(watermark)
          console.log("[STRUCT] Welcome New User!")
          console.log("[TEXT] Looks like you're new user, so lets register!")
          rl.question("Enter Your Name : ", namadia => {
            if(namadia == "") {
              console.log("You need a name.")
            } else {
              rl.question("Enter your servers name : ", ServerNama => {
                if(ServerNama == "") {
                  console.log("idk, you need a servers name.")
                } else {
                  rl.question(`Enter ${ServerNama} IP : `, Servers => {
                    if(Servers == "") {
                      console.log("need ip.")
                    } else {
                      console.log(`[STRUCT] We need host link ${ServerNama}'s for Website`)
                      rl.question("Enter your host download link : ", hostlink1 => {
                        if(hostlink1 == "") {
                          console.log("bad if you not answered thats.")
                        } else {
                          rl.question("Enter your servers discord link : ", discordserver1 => {
                            if(discordserver1 == "") {
                              console.log("blank?")
                            } else {
                              // REGISTER SUCCES
                              // Hmmm now do a ->
                      console.clear();
                      console.log(watermark)
                      const dir = "./interface/";
                      if(fs.existsSync('./interface')) {
                      fs.readdir(dir, (err, files) => {
    if (err) {
        throw err;
    }
    /********** FreenzySG **********/
    // to do :
    // c items, rttex, online counts
    /*******************************/
    // files object contains all files names
    // log them on console
    /*******************************/
    files.forEach(file => {
        fs.writeFileSync(
          "_interface_your_http.txt",
          `${files}`
        )
    });
    console.log("[STRUCT] Interface.txt created! owo.")
});
if(fs.existsSync('online_count.txt')) {
const dataOnline = fs.readFileSync('./online_count.txt', 'utf8')
} else {
  // Let it blank. :D
}
                      } else {
                        console.log("We cannot read your interface,game folder. put it here")
                        console.log(gradient.rainbow('Press any key to countinue...'))
  // Press anykey system.
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
                      }
                      fs.writeFileSync(
                        "save.json",
                        `{
  "Servers": "${Servers}",
  "ServersName": "${ServerNama}",
  "Developer": "${namadia}",
  "DiscordLink": "${discordserver1}",
  "HostLink": "${hostlink1}"
}`
                      )
                      // const { ServersName, Developer, Servers } = require('./save.json')
                      console.log(gradient.rainbow(serverup));
                      // const { ServersName, Developer, Servers } = require('./save.json')
                      console.log("[-] saweria.co/FrenzyS6")
                          console.log("[STRUCT] Interface.txt created! owo.")
    console.log(`[TEXT] Servers Running in ${Servers}`)
    console.log(`[STRUCT] Listening to https://${Servers}`)
const client = http.createServer(function(req, res) {
  // get ip
    let ipAddress = req.connection.remoteAddress;
    ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
    var ip = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress || 
        req.connection.socket.remoteAddress
        //req.connection.destroy();
    if (req.url == "/growtopia/server_data.php") {
        if (req.method = "POST") {
            visit++;
            const { ServersName, Developer, Servers, hostLink, discordLink } = require('./save.json')
            res.writeHead(200, "dsc.gg/your-http");
        res.write(htmlnya1);
            res.end();
            console.log(`[DATE] ${tanggal}
[+] Ip Address : ${ipAddress}              
[+] Sending req : ${req.method}
[+] Status : Growtopia
[+] Traffic : Accepted.
[+] Receive (80) : 0`);
            console.log("[FS] Logs Writted")
           fs.appendFileSync(
              "_your.http.txt",
              `\n${ipAddress} ${req.method} Growtopia\n`)
        } else {
          const { ServersName, Developer, Servers, HostLink, DiscordLink } = require('./save.json')
          res.writeHead(200, "dsc.gg/your-http");
            res.end();
            console.log(`${tanggal}
[+] Ip Address : ${ipAddress}              
[+] Sending req : ${req.method}
[+] Status : Growtopia
[+] Traffic : Accepted.
[+] Receive (80) : 0`);
            console.log("[FS] Logs Writted")
            fs.appendFileSync(
              "_your.http.txt",
              `\n${ipAddress} ${req.method} Growtopia`)
        }
    }
    else {
const { ServersName, Developer, Servers, hostlink, discordlink } = require('./save.json') // Get data onced again.
const htmlnya1 = `
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- My CSS -->
    <link rel="stylesheet" href="style.css">

  <title>${ServersName}</title>
  </head>
  <body>
      <!-- Jumbotron -->
      <div class="jumbotron text-center">
          <img src="https://c.tenor.com/7HITBy-s_zAAAAAC/popcorn.gif?width=677&height=675" alt="Server Logo" width="200" class="rounded-circle img-thumbnail">
        <h1 class="display-4">${ServersName}'s: The Growtopia Private Servers</h1>
        <p class="lead">${ServersName}'s Develop by ${Developer} is UP</p>
        <p class="lead">${dataOnline} people is online right now (Last-Edited)</p>
        <br>
        <a class="btn" href="${hostlink}" role="button" style="background-color: rgb(255, 255, 255);">Play ${ServersName}</a>&nbsp;
        <a class="btn" href="${discordlink}" role="button" style="background-color: rgb(255, 255, 255);">${ServersName} discord</a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,165.3C672,149,768,171,864,186.7C960,203,1056,213,1152,208C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <!-- About Us -->
      <section id="#about">
        <div class="container">
                <div class="row text-center mb-3">
                  <div class="col">
                    <h2 >About Us</h2>
                  </div>
                </div>
                <div class="row justify-content-center fs-5 text-center">
                    <div class="col-4">
                        <p>${ServersName} is up! go player and download the host by clicking the buttons!</p>
                    </div>
                    <div class="col-4">
                        <p>A cool Growtopia Private Servers " ${ServersName} " and Develop by ${Developer} there is so many features! and currently ${dataOnline} player online!</p>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9c9e9e" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,160C672,139,768,149,864,138.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>
      <!-- End About Us -->

<!-- why -->
      <section id="#why">
        <div class="container">
                <div class="row text-center mb-3">
                  <div class="col">
                    <h2 >Why ${ServersName}</h2>
                  </div>
                </div>
                <div class="row justify-content-center fs-5 text-center">
                    <div class="col-4">
                        <p>${ServersName} is the best server, with the best community. You will also be safe if you play this server, because this server is encrypted! Good!, our developers (${Developer}) also respond to other people's calls and of course this server is always updated following Growtopia Original.</p>
                    </div>
                    <div class="col-4">
                    <a class="btn" href="${hostlink}" role="button" style="background-color: rgb(255, 255, 255);">Play ${ServersName}</a>&nbsp;
        <a class="btn" href="${discordlink}" role="button" style="background-color: rgb(255, 255, 255);">${ServersName} discord</a>
        </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9c9e9e" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,160C672,139,768,149,864,138.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>
      <!-- End About Us -->

      <!-- Footer -->
      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3" style="background-color: rgb(220, 217, 221);">
          Copyright ${Developer} 2021 All Right Reserved.
          <a class="text-dark" href="${discordlink}">${ServersName}'s discord servers</a>
        </div>
      </footer>
      <!-- End of Footer -->
  </body>
</html>
` // HTMLS CODE.
console.log(`${tanggal}
[+] Ip Address : ${ipAddress}              
[+] Sending req : ${req.method}
[+] Status : Non-Growtopia
[+] Traffic : Blocked.
[+] Receive (80) : 0`);
console.log("[FS] Logs Writted")
            fs.appendFileSync( // Logs written.
              "_your.http.txt",
              `\n${ipAddress} ${req.method} Non-Growtopia\n`)
    
       res.writeHead(200, "dsc.gg/your-http");
        res.write(htmlnya1);
        res.end();
        //res.destroy();
    }
})
client.listen(80) // Listen to the '80' portals.
//////////********** !!WARNING!! JUST A NOOB,STUPID,DUMBASS CODES!! **********//////////
//////////********** !!WARNING!! JUST A NOOB,STUPID,DUMBASS CODES!! **********//////////
//////////********** !!WARNING!! JUST A NOOB,STUPID,DUMBASS CODES!! **********//////////
//////////********** !!WARNING!! JUST A NOOB,STUPID,DUMBASS CODES!! **********//////////
//////////********** !!WARNING!! JUST A NOOB,STUPID,DUMBASS CODES!! **********//////////
//////////********** !!WARNING!! JUST A NOOB,STUPID,DUMBASS CODES!! **********//////////
//////////********** !!WARNING!! JUST A NOOB,STUPID,DUMBASS CODES!! **********//////////
//////////********** !!WARNING!! JUST A NOOB,STUPID,DUMBASS CODES!! **********//////////
                    }
                  })
                }
              })
            }
          })
    }
                          })
                        }
                      })
        } else {
          console.log(watermark)
          console.log("Process Failed. System Cannot Read : items.dat, coredata.txt.");
      tittle('Process Failed to Executed. Contact FreenzySG if Still happened.')
      console.log(gradient.rainbow('Press any key to countinue...'))
  // Press anykey system.
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
          fs.appendFileSync(
            "_your.http_error.txt",
            `\n${tanggal} failed do process cuased cannot read items.dat\n`
          )
        }
      }
    } else {
      fs.appendFileSync(
        "otp.txt",
        `\n${tanggal} failed entered otp. ${rlOtp}\n` // Wrong otp logs. so if they crash they know they wrong otp's.
      )
      tittle('Process Failed to Executed. Contact FreenzySG if Still happened.')
      console.log("Wrong OTP, you're not Human.") // Post the status.
      tittle('Wrong OTP Noob.')
      console.log(gradient.rainbow('Press any key to countinue...'))
  // Press anykey system.
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
    }
  }
})
} else {
  console.log(gradient.rainbow(watermark))
    fs.appendFileSync(
    "_your.http_error.txt",
    `\nCannot found online_count file\n${tanggal}\n`
  )
    console.log("[FS] Error logs created.")
  console.log("Something is wrong. we cant detect online player. make sure this executabled puted on your sources file.")
  console.log("If this still happened contact in discord.")
  console.log("Code : 708") // '708' files not found.
      tittle('Process Failed to Executed. Contact FreenzySG if Still happened.')
      console.log(gradient.rainbow('Press any key to countinue...'))
  // Press anykey system.
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));}
} else {
  const tanggal = new Date(); // Get date
  console.log(gradient.rainbow(watermark)) // Post the big icons.

  // There is a errors.
  fs.appendFileSync(
    "_your.http_error.txt",
    `\nCannot found interface folders\n${tanggal}\n` // No interface folder.
  )
  console.log("[FS] Error logs created.")
  console.log("Cannot found Interface folders")
  console.log("[FileSystem] Error code : 708") // '708' files not found. 708 = 404
  console.log("Still happened? contact Frenzy in discord")
      tittle('Process Failed to Executed. Contact FreenzySG if Still happened.')
      console.log(gradient.rainbow('Press any key to countinue...'))
  // Press anykey system.
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
}

// All ended thanks for use YOUR_HTTP sources code.
// If you wanted to recode/republish or smth else. just give the credit.
// Workspace-name: YOUR-HTTP-BASIC

/*** Credits ***/
/* 
Idea/Maker: FrenzySG (a.k.a Freenzy, FreenzySG), iMix (a.k.a Mix, Mixer, Mixob),
Languages used: Nodejs (98%) , HTML's (2%)
Projects name: YOUR-HTTP
*/
/*** Credits ***/
// Your-HTTP Sources Code.

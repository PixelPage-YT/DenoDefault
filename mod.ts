import {createvsc} from "./createvsc.ts"

const args = Deno.args

if(args[0]){
    let project = args[0];
    var myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');
    var myInit = {
        method: 'GET',
        headers: myHeaders,
    };
    if(project == "aqua"){
        console.log("[Info] Template: Aqua")
        console.log("[Info] Creating .vscode dir")
        Deno.mkdirSync(".vscode")
        console.log("[Info] Creating settings.json in .vscode")
        Deno.createSync("./.vscode/settings.json")
        createvsc()
        console.log("[Info] Creating mod.ts File")
        Deno.createSync("mod.ts")
        console.log("[Info] Writing mod.ts")
        fetch("https://folizza.neocities.org/denodefault/aqua/mod.js", myInit)
            .then(response=>response.text())
            .then(data=>Deno.writeTextFileSync("mod.ts",data))
        console.log("[Info] Done!")
    }
    if(project == "harmony"){
        console.log("[Info] Template: Harmony")
        console.log("[Info] Creating .vscode dir")
        Deno.mkdirSync(".vscode")
        console.log("[Info] Creating settings.json in .vscode")
        Deno.createSync("./.vscode/settings.json")
        createvsc()
        console.log("[Info] Creating mod.ts File")
        Deno.createSync("mod.ts")
        console.log("[Info] Writing mod.ts")
        fetch("https://folizza.neocities.org/denodefault/harmony/mod.js", myInit)
            .then(response=>response.text())
            .then(data=>Deno.writeTextFileSync("mod.ts",data))
        console.log("[Info] Done!")
    }
}else{
    console.log("[Info] Template: Default")
    console.log("[Info] Creating .vscode dir")
    Deno.mkdirSync(".vscode")
    console.log("[Info] Creating settings.json in .vscode")
    Deno.createSync("./.vscode/settings.json")
    createvsc()
    console.log("[Info] Creating mod.ts File")
    Deno.createSync("mod.ts")
    console.log("[Info] Done!")
}
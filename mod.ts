import { parse } from "https://deno.land/std/flags/mod.ts";
import os from "https://deno.land/x/dos@v0.11.0/mod.ts";
import username from "https://deno.land/x/username/mod.ts";

const args = parse(Deno.args)
if(args.template){
    let project = args.template;
    if(project == "aqua"){
        console.log("[Info] Template: Aqua")
        if(os.platform() == "darwin"){
            console.log("[Info] OS: MacOS")
            console.log("[Info] Creating .vscode dir")
            Deno.mkdirSync(".vscode")
            console.log("[Info] Creating settings.json in .vscode")
            Deno.createSync("./.vscode/settings.json")
            Deno.writeTextFileSync("./.vscode/settings.json", JSON.stringify({"deno.enable":true,"deno.path": "/Users/" + await username() + "/.deno/bin/deno"}))
            console.log("[Info] Creating mod.ts File")
            Deno.createSync("mod.ts")
            console.log("[Info] Writing mod.ts")
            Deno.writeTextFileSync("mod.ts",`
import Aqua from "https://deno.land/x/aqua/mod.ts";

const app = new Aqua(3100);

app.get("/", (req) => {
    return "Hello, World!";
});
            `)
            console.log("[Info] Done!")
        }else if(os.platform() == "windows"){
            console.log("[Info] OS: Windows")
            console.log("[Info] Creating .vscode dir")
            Deno.mkdirSync(".vscode")
            console.log("[Info] Creating settings.json in .vscode")
            Deno.createSync("./.vscode/settings.json")
            Deno.writeTextFileSync("./.vscode/settings.json", JSON.stringify({"deno.enable":true}))
            console.log("[Info] Creating mod.ts File")
            Deno.createSync("mod.ts")
            console.log("[Info] Writing mod.ts")
            Deno.writeTextFileSync("mod.ts",`
import Aqua from "https://deno.land/x/aqua/mod.ts";

const app = new Aqua(3100);

app.get("/", (req) => {
    return "Hello, World!";
});
            `)
            console.log("[Info] Done!")
        }else if(os.platform() == "linux"){
            console.log("[Info] OS: Linux")
            console.log("[Info] Creating .vscode dir")
            Deno.mkdirSync(".vscode")
            console.log("[Info] Creating settings.json in .vscode")
            Deno.createSync("./.vscode/settings.json")
            Deno.writeTextFileSync("./.vscode/settings.json", JSON.stringify({"deno.enable":true,"deno.path": "/home/" + await username() + "/.deno/bin/deno"}))
            console.log("[Info] Creating mod.ts File")
            Deno.createSync("mod.ts")
            console.log("[Info] Writing mod.ts")
            Deno.writeTextFileSync("mod.ts",`
import Aqua from "https://deno.land/x/aqua/mod.ts";

const app = new Aqua(3100);

app.get("/", (req) => {
    return "Hello, World!";
});
            `)
            console.log("[Info] Done!")
        }
    }
}else{
    console.log("[Info] Template: Default")
    if(os.platform() == "darwin"){
        console.log("[Info] OS: MacOS")
        console.log("[Info] Creating .vscode dir")
        Deno.mkdirSync(".vscode")
        console.log("[Info] Creating settings.json in .vscode")
        Deno.createSync("./.vscode/settings.json")
        Deno.writeTextFileSync("./.vscode/settings.json", JSON.stringify({"deno.enable":true,"deno.path": "/Users/" + await username() + "/.deno/bin/deno"}))
        console.log("[Info] Creating mod.ts File")
        Deno.createSync("mod.ts")
        console.log("[Info] Done!")
    }else if(os.platform() == "windows"){
        console.log("[Info] OS: Windows")
        console.log("[Info] Creating .vscode dir")
        Deno.mkdirSync(".vscode")
        console.log("[Info] Creating settings.json in .vscode")
        Deno.createSync("./.vscode/settings.json")
        Deno.writeTextFileSync("./.vscode/settings.json", JSON.stringify({"deno.enable":true}))
        console.log("[Info] Creating mod.ts File")
        Deno.createSync("mod.ts")
        console.log("[Info] Done!")
    }else if(os.platform() == "linux"){
        console.log("[Info] OS: Linux")
        console.log("[Info] Creating .vscode dir")
        Deno.mkdirSync(".vscode")
        console.log("[Info] Creating settings.json in .vscode")
        Deno.createSync("./.vscode/settings.json")
        Deno.writeTextFileSync("./.vscode/settings.json", JSON.stringify({"deno.enable":true,"deno.path": "/home/" + await username() + "/.deno/bin/deno"}))
        console.log("[Info] Creating mod.ts File")
        Deno.createSync("mod.ts")
        console.log("[Info] Done!")
    }
}
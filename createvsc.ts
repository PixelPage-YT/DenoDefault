import os from "https://deno.land/x/dos@v0.11.0/mod.ts";
import username from "https://deno.land/x/username/mod.ts";

export async function createvsc(){
    if(os.platform() == "darwin"){
        console.log("[Info] OS: MacOS")
        Deno.writeTextFileSync("./.vscode/settings.json", JSON.stringify({"deno.enable":true,"deno.path": "/Users/" + await username() + "/.deno/bin/deno"}))
    }else if(os.platform() == "linux"){
        console.log("[Info] OS: MacOS")
        Deno.writeTextFileSync("./.vscode/settings.json", JSON.stringify({"deno.enable":true,"deno.path": "/home/" + await username() + "/.deno/bin/deno"}))
    }else if(os.platform() == "windows"){
        console.log("[Info] OS: MacOS")
        Deno.writeTextFileSync("./.vscode/settings.json", JSON.stringify({"deno.enable":true}))
    }
}
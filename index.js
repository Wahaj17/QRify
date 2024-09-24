
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";



inquirer
    .prompt([{
        message: "Enter the URL of the QR Code: ",
        name: "qrl",
    },
    ])
    .then((answers) => {
        const url = answers.qrl;
        const qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("useMe.png"));

        fs.writeFile("thisWasFun.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

import React from 'react';
import "./Signature.css"; 

const Signature = (props) => {
    const {name, email, phone, position} = props
    const defaultValue = {
        name: "Your Name",
        email: "your.email@cosmodern.vn",
        phone: "+84123456789",
        position: "Cosmodern Executive"
    }

    function selectElementContents(el) {
        var body = document.body, range, sel;
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            sel.removeAllRanges();
            try {
                range.selectNodeContents(el);
                sel.addRange(range);
            } catch (e) {
                range.selectNode(el);
                sel.addRange(range);
            }
            document.execCommand("copy");
            console.log(range);
            alert("Copied successfully!");
        } else if (body.createTextRange) {
            range = body.createTextRange(el);
            range.moveToElementText(el);
            range.select();
            range.execCommand("Copy");
            alert("Copied successfully!");
        }
    }

    return (
        <div style={{ width: "100%" }} >
            <table id="myTable" width="100%" style={{ width: "420px"}}>
                <tbody>
                    <tr>
                        <td maxWidth="35px"></td>
                    </tr>
                    <tr>
                        <td colSpan={9} style={{fontWeight:700, fontSize: 18, color: "#000000", textTransform: "uppercase"}}>
                            {name ? name : defaultValue.name}
                        </td>
                        <td colSpan={3} align="right">
                            <a href="https://cosmodern.vn" target="_blank" rel="noopener noreferrer">
                                <img class="img-fit" style={{ marginTop: "4px" }} src= 'https://drive.google.com/u/0/uc?id=1fGo2nJmPb_k7g9IHJhnbX7yUWvFcRY9h' alt="logo-home" width = "150px" max-height = "45px" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={12} style={{fontSize: 12, color: "#000000", textTransform: "uppercase"}} >
                            {position ? position : defaultValue.position}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={12} style={{fontSize: 12, color: "#000000", textTransform: "lowercase"}} >
                            {email ? email : defaultValue.email}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={12} style={{paddingBottom: "15px", fontSize: 12, borderBottom: "1px solid #000000", color: "#000000", textTransform: "uppercase"}} >
                            {phone ? phone : defaultValue.phone}
                        </td>
                    </tr>
                    <tr style={{fontSize: 12, color: "#000000"}}>
                        <td colSpan={2} style={{ paddingTop: "20px"}}>
                            <b>Office Address: </b>
                        </td>
                        <td colSpan={11} style={{ paddingTop: "20px"}}>
                            <strong>Toong Vo Thi Sau <br></br></strong><>188 Vo Thi Sau, Vo Thi Sau Ward, District 3, HCMC</>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={1} width="55px" height="55px" style={{paddingTop: "10px"}}>
                            <a target="_blank" rel="noopener noreferrer" href="https://cosmodern.vn/"><img width="30px" src='https://drive.google.com/u/0/uc?id=1_X7j_miF2Px493q3NFpjl4EHuwaqg9lA' alt="logo-cosmodern" /></a>
                        </td>
                        <td colSpan={1} width="55px" height="55px" style={{paddingTop: "10px"}}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cosmodern.official/"><img  width="30px" src={"https://cdn-icons-png.flaticon.com/512/1384/1384015.png"} alt="logo-cosmodern-ig" /></a>
                        </td>
                        <td colSpan={1} width="55px" height="55px" style={{paddingTop: "10px"}}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/cosmodern.official"><img  width="30px" src={"https://cdn-icons-png.flaticon.com/512/59/59439.png"} alt="logo-cosmodern-fb" /></a>
                        </td>
                        <td colSpan={1} width="55px" style={{paddingTop: "10px"}}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/cosmodern-official/"><img width="30px" src={"https://cdn-icons-png.flaticon.com/512/61/61109.png"} alt="logo-cosmodern-linkedin" /></a>
                        </td>
                        <td colSpan={8}></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() =>selectElementContents(document.getElementById("myTable"))} style={{ display: "block", marginTop: "12px" }} className="btn">Copy</button>
        </div>
    )
}

export default Signature
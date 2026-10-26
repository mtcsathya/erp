<style>
    .employee-card-design1 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: 3px solid #1976D2;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0 4px 15px rgba(25, 118, 210, 0.2);
        overflow: hidden;
    }

    .header-emp1 {
        background: linear-gradient(135deg, #1976D2 0%, #1565C0 100%);
        padding: 8px 10px;
        color: white;
    }

    .header-grid-emp1 {
        display: table;
        width: 100%;
    }

    .logo-col-emp1 {
        display: table-cell;
        width: 45px;
        vertical-align: middle;
    }

    .logo-emp1 {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 8px;
        padding: 4px;
    }

    .logo-emp1 img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .school-col-emp1 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
        text-align: left;
    }

    .school-name-emp1 {
        font-size: 11px;
        font-weight: 700;
        margin: 0 0 2px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .school-address-emp1 {
        font-size: 10px;
        opacity: 0.95;
        line-height: 1.4;
    }

    .body-emp1 {
        padding: 8px;
    }

    .employee-header-emp1 {
        display: table;
        width: 100%;
        margin-bottom: 6px;
        padding-bottom: 6px;
        border-bottom: 2px solid #E3F2FD;
    }

    .photo-col-emp1 {
        display: table-cell;
        width: 65px;
        vertical-align: middle;
    }

    .photo-emp1 {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        border: 3px solid #1976D2;
        object-fit: cover;
        box-shadow: 0 2px 8px rgba(25, 118, 210, 0.2);
    }

    .info-col-emp1 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
    }

    .name-emp1 {
        font-size: 12px;
        font-weight: 700;
        color: #333;
        margin: 0 0 3px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .emp-code-emp1 {
        font-size: 8px;
        color: #1976D2;
        font-weight: 600;
        margin-bottom: 3px;
    }

    .designation-emp1 {
        font-size: 9px;
        color: white;
        background: #1976D2;
        padding: 2px 6px;
        border-radius: 3px;
        display: inline-block;
        font-weight: 600;
        margin-bottom: 2px;
    }

    .department-emp1 {
        font-size: 10px;
        color: #666;
        font-weight: 600;
    }

    .details-emp1 {
        font-size: 10px;
        line-height: 1.5;
    }

    .details-emp1 table {
        width: 100%;
        border-collapse: collapse;
    }

    .details-emp1 td {
        padding: 2px 5px;
        vertical-align: top;
    }

    .label-emp1 {
        color: #666;
        font-weight: 600;
        width: 70px;
    }

    .value-emp1 {
        color: #333;
        font-weight: 500;
    }

    .footer-emp1 {
        text-align: center;
        margin-top: 6px;
        padding-top: 5px;
        border-top: 1px dashed #e0e0e0;
    }

    .signature-emp1 {
        width: 65px;
        height: auto;
        max-height: 30px;
        object-fit: contain;
    }

    .auth-text-emp1 {
        font-size: 10px;
        color: #999;
        margin-top: 2px;
    }
</style>

<div class="employee-card-design1">
    <div class="header-emp1">
        <div class="header-grid-emp1">
            <div class="logo-col-emp1">
                <div class="logo-emp1">
                    <img src="#INSTITUTE_ICON#" alt="Logo">
                </div>
            </div>
            <div class="school-col-emp1">
                <div class="school-name-emp1">#INSTITUTE_NAME#</div>
                <div class="school-address-emp1">#INSTITUTE_ADDRESS#</div>
            </div>
        </div>
    </div>

    <div class="body-emp1">
        <div class="employee-header-emp1">
            <div class="photo-col-emp1">
                <img src="#PHOTO#" alt="Photo" class="photo-emp1">
            </div>
            <div class="info-col-emp1">
                <div class="name-emp1">#NAME#</div>
                <div class="emp-code-emp1">EMP: #EMPLOYEE_CODE#</div>
                <div class="designation-emp1">#DESIGNATION#</div>
                <div class="department-emp1">#DEPARTMENT#</div>
            </div>
        </div>

        <div class="details-emp1">
            <table>
                <tr>
                    <td class="label-emp1">Father:</td>
                    <td class="value-emp1">#FATHER_NAME#</td>
                </tr>
                <tr>
                    <td class="label-emp1">DOB:</td>
                    <td class="value-emp1">#DOB#</td>
                </tr>
                <tr>
                    <td class="label-emp1">Mobile:</td>
                    <td class="value-emp1">#CONTACT_NUMBER#</td>
                </tr>
                <tr>
                    <td class="label-emp1">Blood:</td>
                    <td class="value-emp1">#BLOOD_GROUP#</td>
                </tr>
                <tr>
                    <td class="label-emp1">Address:</td>
                    <td class="value-emp1">#ADDRESS#</td>
                </tr>
            </table>
        </div>

        <div class="footer-emp1">
            <img src="#SIGNATURE#" alt="Signature" class="signature-emp1">
            <div class="auth-text-emp1">Authorized Signatory</div>
        </div>
    </div>
</div>

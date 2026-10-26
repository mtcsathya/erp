<style>
    .employee-card-design3 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: none;
        border-radius: 12px;
        background: linear-gradient(to bottom, #f3e5f5 0%, #ffffff 20%);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
        overflow: hidden;
        padding: 8px;
    }

    .top-bar-emp3 {
        background: linear-gradient(135deg, #7B1FA2 0%, #6A1B9A 100%);
        margin: -8px -8px 8px -8px;
        padding: 8px 10px;
        color: white;
    }

    .top-content-emp3 {
        display: table;
        width: 100%;
    }

    .logo-cell-emp3 {
        display: table-cell;
        width: 45px;
        vertical-align: middle;
    }

    .logo-box-emp3 {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 8px;
        padding: 4px;
    }

    .logo-box-emp3 img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .company-cell-emp3 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
        text-align: left;
    }

    .company-title-emp3 {
        font-size: 11px;
        font-weight: 700;
        margin: 0 0 2px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .company-subtitle-emp3 {
        font-size: 10px;
        opacity: 0.95;
        line-height: 1.2;
    }

    .card-body-emp3 {
        background: white;
        border: 2px solid #7B1FA2;
        border-radius: 8px;
        padding: 8px;
    }

    .employee-row-emp3 {
        display: table;
        width: 100%;
        margin-bottom: 6px;
    }

    .photo-box-emp3 {
        display: table-cell;
        width: 65px;
        vertical-align: middle;
    }

    .photo-emp3 {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        border: 3px solid #7B1FA2;
        object-fit: cover;
    }

    .details-box-emp3 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
    }

    .employee-name-emp3 {
        background: #7B1FA2;
        color: white;
        padding: 4px 6px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: 700;
        margin-bottom: 3px;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .employee-code-emp3 {
        font-size: 10px;
        color: #7B1FA2;
        font-weight: 600;
        margin-bottom: 3px;
    }

    .role-box-emp3 {
        background: #E1BEE7;
        padding: 3px 5px;
        border-radius: 3px;
        margin-bottom: 2px;
    }

    .role-title-emp3 {
        font-size: 9px;
        color: #6A1B9A;
        font-weight: 600;
        margin: 0;
    }

    .dept-title-emp3 {
        font-size: 10px;
        color: #666;
        font-weight: 600;
    }

    .info-section-emp3 {
        margin-top: 6px;
        padding-top: 6px;
        border-top: 1px solid #f0f0f0;
    }

    .info-section-emp3 table {
        width: 100%;
        border-collapse: collapse;
    }

    .info-section-emp3 td {
        padding: 2px 3px;
        font-size: 10px;
        vertical-align: top;
    }

    .info-label-emp3 {
        color: #666;
        font-weight: 600;
        width: 65px;
    }

    .info-value-emp3 {
        color: #333;
        font-weight: 500;
    }

    .bottom-sign-emp3 {
        text-align: center;
        margin-top: 6px;
        padding-top: 5px;
        border-top: 1px dashed #e0e0e0;
    }

    .sign-img-emp3 {
        width: 60px;
        height: auto;
        object-fit: contain;
    }

    .sign-text-emp3 {
        font-size: 9px;
        color: #999;
        margin-top: 2px;
    }
</style>

<div class="employee-card-design3">
    <div class="top-bar-emp3">
        <div class="top-content-emp3">
            <div class="logo-cell-emp3">
                <div class="logo-box-emp3">
                    <img src="#INSTITUTE_ICON#" alt="Logo">
                </div>
            </div>
            <div class="company-cell-emp3">
                <div class="company-title-emp3">#INSTITUTE_NAME#</div>
                <div class="company-subtitle-emp3">#INSTITUTE_ADDRESS#</div>
            </div>
        </div>
    </div>

    <div class="card-body-emp3">
        <div class="employee-row-emp3">
            <div class="photo-box-emp3">
                <img src="#PHOTO#" alt="Photo" class="photo-emp3">
            </div>
            <div class="details-box-emp3">
                <div class="employee-name-emp3">#NAME#</div>
                <div class="employee-code-emp3">ID: #EMPLOYEE_CODE#</div>
                <div class="role-box-emp3">
                    <div class="role-title-emp3">#DESIGNATION#</div>
                </div>
                <div class="dept-title-emp3">#DEPARTMENT#</div>
            </div>
        </div>

        <div class="info-section-emp3">
            <table>
                <tr>
                    <td class="info-label-emp3">Father:</td>
                    <td class="info-value-emp3">#FATHER_NAME#</td>
                </tr>
                <tr>
                    <td class="info-label-emp3">DOB:</td>
                    <td class="info-value-emp3">#DOB#</td>
                </tr>
                <tr>
                    <td class="info-label-emp3">Mobile:</td>
                    <td class="info-value-emp3">#CONTACT_NUMBER#</td>
                </tr>
                <tr>
                    <td class="info-label-emp3">Blood:</td>
                    <td class="info-value-emp3">#BLOOD_GROUP#</td>
                </tr>
                <tr>
                    <td class="info-label-emp3">Address:</td>
                    <td class="info-value-emp3">#ADDRESS#</td>
                </tr>
            </table>
        </div>

        <div class="bottom-sign-emp3">
            <img src="#SIGNATURE#" alt="Signature" class="sign-img-emp3">
            <div class="sign-text-emp3">Authorized Signature</div>
        </div>
    </div>
</div>

<style>
    .employee-card-design5 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: 2px solid #00897B;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0 3px 12px rgba(0, 137, 123, 0.15);
        overflow: hidden;
    }

    .top-strip-emp5 {
        height: 4px;
        background: linear-gradient(90deg, #00897B 0%, #00695C 100%);
    }

    .header-zone-emp5 {
        padding: 8px 10px;
        background: #E0F2F1;
        border-bottom: 2px solid #00897B;
    }

    .header-table-emp5 {
        display: table;
        width: 100%;
    }

    .logo-zone-emp5 {
        display: table-cell;
        width: 40px;
        vertical-align: middle;
    }

    .logo-img-emp5 {
        width: 38px;
        height: 38px;
        object-fit: contain;
    }

    .company-zone-emp5 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
    }

    .company-heading-emp5 {
        font-size: 11px;
        font-weight: 700;
        color: #00897B;
        margin: 0 0 2px 0;
        text-transform: uppercase;
        line-height: 1.1;
    }

    .company-location-emp5 {
        font-size: 7px;
        color: #666;
        line-height: 1.2;
    }

    .content-zone-emp5 {
        padding: 8px;
    }

    .employee-main-emp5 {
        display: table;
        width: 100%;
        margin-bottom: 6px;
        padding-bottom: 6px;
        border-bottom: 1px solid #f0f0f0;
    }

    .photo-zone-emp5 {
        display: table-cell;
        width: 65px;
        vertical-align: middle;
    }

    .photo-square-emp5 {
        width: 60px;
        height: 60px;
        border: 2px solid #00897B;
        border-radius: 8px;
        object-fit: cover;
    }

    .profile-zone-emp5 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
    }

    .profile-name-emp5 {
        font-size: 12px;
        font-weight: 700;
        color: #333;
        margin: 0 0 3px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .profile-id-emp5 {
        font-size: 8px;
        color: #00897B;
        font-weight: 600;
        margin-bottom: 3px;
    }

    .profile-position-emp5 {
        font-size: 9px;
        color: white;
        background: #00897B;
        padding: 2px 6px;
        border-radius: 3px;
        display: inline-block;
        font-weight: 600;
        margin-bottom: 2px;
    }

    .profile-unit-emp5 {
        font-size: 8px;
        color: #666;
        font-weight: 600;
        background: #E0F2F1;
        padding: 2px 5px;
        border-radius: 3px;
        display: inline-block;
    }

    .personal-info-emp5 {
        font-size: 10px;
        line-height: 1.5;
    }

    .personal-info-emp5 table {
        width: 100%;
        border-collapse: collapse;
    }

    .personal-info-emp5 tr {
        border-bottom: 1px solid #f8f8f8;
    }

    .personal-info-emp5 tr:last-child {
        border-bottom: none;
    }

    .personal-info-emp5 td {
        padding: 2px 3px;
        vertical-align: top;
    }

    .info-key-emp5 {
        color: #666;
        font-weight: 600;
        width: 65px;
    }

    .info-data-emp5 {
        color: #333;
        font-weight: 500;
    }

    .signature-zone-emp5 {
        text-align: center;
        margin-top: 6px;
        padding-top: 5px;
        border-top: 1px solid #E0F2F1;
    }

    .signature-pic-emp5 {
        width: 60px;
        height: auto;
        object-fit: contain;
    }

    .signature-note-emp5 {
        font-size: 9px;
        color: #999;
        margin-top: 2px;
    }
</style>

<div class="employee-card-design5">
    <div class="top-strip-emp5"></div>

    <div class="header-zone-emp5">
        <div class="header-table-emp5">
            <div class="logo-zone-emp5">
                <img src="#INSTITUTE_ICON#" alt="Logo" class="logo-img-emp5">
            </div>
            <div class="company-zone-emp5">
                <div class="company-heading-emp5">#INSTITUTE_NAME#</div>
                <div class="company-location-emp5">#INSTITUTE_ADDRESS#</div>
            </div>
        </div>
    </div>

    <div class="content-zone-emp5">
        <div class="employee-main-emp5">
            <div class="photo-zone-emp5">
                <img src="#PHOTO#" alt="Photo" class="photo-square-emp5">
            </div>
            <div class="profile-zone-emp5">
                <div class="profile-name-emp5">#NAME#</div>
                <div class="profile-id-emp5">EMP ID: #EMPLOYEE_CODE#</div>
                <div class="profile-position-emp5">#DESIGNATION#</div>
                <div class="profile-unit-emp5">#DEPARTMENT#</div>
            </div>
        </div>

        <div class="personal-info-emp5">
            <table>
                <tr>
                    <td class="info-key-emp5">Father Name:</td>
                    <td class="info-data-emp5">#FATHER_NAME#</td>
                </tr>
                <tr>
                    <td class="info-key-emp5">Date of Birth:</td>
                    <td class="info-data-emp5">#DOB#</td>
                </tr>
                <tr>
                    <td class="info-key-emp5">Mobile No:</td>
                    <td class="info-data-emp5">#CONTACT_NUMBER#</td>
                </tr>
                <tr>
                    <td class="info-key-emp5">Blood Group:</td>
                    <td class="info-data-emp5">#BLOOD_GROUP#</td>
                </tr>
                <tr>
                    <td class="info-key-emp5">Address:</td>
                    <td class="info-data-emp5">#ADDRESS#</td>
                </tr>
            </table>
        </div>

        <div class="signature-zone-emp5">
            <img src="#SIGNATURE#" alt="Signature" class="signature-pic-emp5">
            <div class="signature-note-emp5">Authorized Signatory</div>
        </div>
    </div>
</div>

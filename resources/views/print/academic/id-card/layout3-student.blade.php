<style>
    .id-card-design3 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: none;
        border-radius: 10px;
        background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 20%);
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        overflow: hidden;
        padding: 12px;
    }

    .header-bar-design3 {
        background: #2196F3;
        margin: -12px -12px 12px -12px;
        padding: 10px 12px;
        text-align: center;
        color: white;
    }

    .header-content-design3 {
        display: table;
        width: 100%;
    }

    .logo-cell-design3 {
        display: table-cell;
        width: 50px;
        vertical-align: middle;
    }

    .logo-design3 {
        width: 45px;
        height: 45px;
        background: white;
        border-radius: 8px;
        padding: 4px;
    }

    .logo-design3 img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .school-cell-design3 {
        display: table-cell;
        vertical-align: middle;
        text-align: left;
        padding-left: 10px;
    }

    .school-name-design3 {
        font-size: 12px;
        font-weight: 700;
        margin: 0 0 2px 0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .school-address-design3 {
        font-size: 8px;
        opacity: 0.9;
        line-height: 1.2;
    }

    .id-badge-design3 {
        background: white;
        border: 2px solid #2196F3;
        border-radius: 8px;
        padding: 10px;
        margin-bottom: 10px;
    }

    .student-header-design3 {
        display: table;
        width: 100%;
        margin-bottom: 8px;
    }

    .photo-container-design3 {
        display: table-cell;
        width: 70px;
        vertical-align: middle;
    }

    .photo-design3 {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 3px solid #2196F3;
        object-fit: cover;
        box-shadow: 0 2px 8px rgba(33, 150, 243, 0.2);
    }

    .name-container-design3 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
    }

    .name-badge-design3 {
        background: #2196F3;
        color: white;
        padding: 6px;
        border-radius: 5px;
        margin-bottom: 6px;
    }

    .name-design3 {
        font-size: 12px;
        font-weight: 700;
        margin: 0 0 2px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .admission-design3 {
        font-size: 9px;
        opacity: 0.9;
    }

    .course-box-design3 {
        background: #E3F2FD;
        padding: 5px;
        text-align: center;
        border-radius: 4px;
        margin-bottom: 8px;
    }

    .course-design3 {
        font-size: 10px;
        font-weight: 600;
        color: #1976D2;
    }

    .info-table-design3 {
        width: 100%;
        border-collapse: collapse;
    }

    .info-table-design3 tr {
        border-bottom: 1px solid #f0f0f0;
    }

    .info-table-design3 tr:last-child {
        border-bottom: none;
    }

    .info-table-design3 td {
        padding: 2px 2px;
        font-size: 9px;
    }

    .info-label-design3 {
        color: #666;
        font-weight: 600;
        width: 70px;
    }

    .info-value-design3 {
        color: #333;
    }

    .footer-design3 {
        text-align: center;
        margin-top: 5px;
    }

    .signature-design3 {
        width: 75px;
        height: auto;
    }

    .auth-text-design3 {
        font-size: 8px;
        color: #999;
    }
</style>

<div class="id-card-design3">
    <div class="header-bar-design3">
        <div class="header-content-design3">
            <div class="logo-cell-design3">
                <div class="logo-design3">
                    <img src="#INSTITUTE_ICON#" alt="Logo">
                </div>
            </div>
            <div class="school-cell-design3">
                <div class="school-name-design3">#INSTITUTE_NAME#</div>
                <div class="school-address-design3">#INSTITUTE_ADDRESS#</div>
            </div>
        </div>
    </div>

    <div class="id-badge-design3">
        <div class="student-header-design3">
            <div class="photo-container-design3">
                <img src="#PHOTO#" alt="Photo" class="photo-design3">
            </div>
            <div class="name-container-design3">
                <div class="name-badge-design3">
                    <div class="name-design3">#NAME#</div>
                    <div class="admission-design3">ID: #ADMISSION_NUMBER#</div>
                    <div class="admission-design3">#COURSE_BATCH#</div>
                </div>
            </div>
        </div>

        <table class="info-table-design3">
            <tr>
                <td class="info-label-design3">Father:</td>
                <td class="info-value-design3">#FATHER_NAME#</td>
            </tr>
            <tr>
                <td class="info-label-design3">DOB:</td>
                <td class="info-value-design3">#DOB#</td>
            </tr>
            <tr>
                <td class="info-label-design3">Mobile:</td>
                <td class="info-value-design3">#CONTACT_NUMBER#</td>
            </tr>
            <tr>
                <td class="info-label-design3">Blood:</td>
                <td class="info-value-design3">#BLOOD_GROUP#</td>
            </tr>
            <tr>
                <td class="info-label-design3">Route:</td>
                <td class="info-value-design3">#ROUTE_NAME#</td>
            </tr>
            <tr>
                <td class="info-label-design3">Stoppage:</td>
                <td class="info-value-design3">#STOPPAGE_NAME#</td>
            </tr>
            <tr>
                <td class="info-label-design3">Address:</td>
                <td class="info-value-design3">#ADDRESS#</td>
            </tr>
        </table>
    </div>

    <div class="footer-design3">
        <img src="#SIGNATURE#" alt="Signature" class="signature-design3">
        <div class="auth-text-design3">Authorized Signature</div>
    </div>
</div>

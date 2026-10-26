<style>
    .id-card-design1 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: 3px solid #667eea;
        border-radius: 15px;
        background: #fff;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        overflow: hidden;
        position: relative;
    }

    .header-design1 {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 10px 12px;
        text-align: center;
        color: white;
    }

    .school-name-design1 {
        font-size: 12px;
        font-weight: 700;
        margin: 0 0 3px 0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        line-height: 1.2;
    }

    .school-address-design1 {
        font-size: 8px;
        opacity: 0.95;
        line-height: 1.3;
    }

    .body-design1 {
        padding: 10px;
    }

    /* Photo and Name Side by Side */
    .student-header-design1 {
        display: table;
        width: 100%;
        margin-bottom: 8px;
    }

    .photo-column-design1 {
        display: table-cell;
        width: 70px;
        vertical-align: middle;
    }

    .photo-design1 {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 3px solid #667eea;
        object-fit: cover;
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
    }

    .name-column-design1 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
    }

    .name-design1 {
        font-size: 13px;
        font-weight: 700;
        color: #333;
        margin: 0 0 4px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .admission-design1 {
        font-size: 9px;
        color: #667eea;
        font-weight: 600;
        line-height: 1.2;
    }

    .info-grid-design1 {
        display: table;
        width: 100%;
        border-collapse: collapse;
    }

    .info-row-design1 {
        display: table-row;
    }

    .info-label-design1 {
        display: table-cell;
        font-size: 9px;
        color: #666;
        font-weight: 600;
        padding: 3px 4px;
        width: 35%;
        vertical-align: top;
    }

    .info-value-design1 {
        display: table-cell;
        font-size: 9px;
        color: #333;
        padding: 3px 4px;
        font-weight: 500;
        vertical-align: top;
    }

    .footer-design1 {
        text-align: center;
        margin-top: 8px;
        padding-top: 6px;
        border-top: 1px solid #f0f0f0;
    }

    .signature-design1 {
        width: 70px;
        height: auto;
        max-height: 25px;
        object-fit: contain;
    }

    .signature-label-design1 {
        font-size: 7px;
        color: #999;
        margin-top: 2px;
    }
</style>

<div class="id-card-design1">
    <div class="header-design1">
        <div class="school-name-design1">#INSTITUTE_NAME#</div>
        <div class="school-address-design1">#INSTITUTE_ADDRESS#</div>
    </div>

    <div class="body-design1">
        <!-- Photo and Name Side by Side -->
        <div class="student-header-design1">
            <div class="photo-column-design1">
                <img src="#PHOTO#" alt="Photo" class="photo-design1">
            </div>
            <div class="name-column-design1">
                <div class="name-design1">#NAME#</div>
                <div class="admission-design1">Admission No: #ADMISSION_NUMBER#</div>
            </div>
        </div>

        <!-- Student Information -->
        <div class="info-grid-design1">
            <div class="info-row-design1">
                <div class="info-label-design1">Course:</div>
                <div class="info-value-design1">#COURSE_BATCH#</div>
            </div>
            <div class="info-row-design1">
                <div class="info-label-design1">Father:</div>
                <div class="info-value-design1">#FATHER_NAME#</div>
            </div>
            <div class="info-row-design1">
                <div class="info-label-design1">DOB:</div>
                <div class="info-value-design1">#DOB#</div>
            </div>
            <div class="info-row-design1">
                <div class="info-label-design1">Mobile:</div>
                <div class="info-value-design1">#CONTACT_NUMBER#</div>
            </div>
            <div class="info-row-design1">
                <div class="info-label-design1">Blood Group:</div>
                <div class="info-value-design1">#BLOOD_GROUP#</div>
            </div>
            <div class="info-row-design1">
                <div class="info-label-design1">Route:</div>
                <div class="info-value-design1">#ROUTE_NAME#</div>
            </div>
            <div class="info-row-design1">
                <div class="info-label-design1">Stoppage:</div>
                <div class="info-value-design1">#STOPPAGE_NAME#</div>
            </div>
            <div class="info-row-design1">
                <div class="info-label-design1">Address:</div>
                <div class="info-value-design1">#ADDRESS#</div>
            </div>
        </div>

        <!-- Signature -->
        <div class="footer-design1">
            <img src="#SIGNATURE#" alt="Signature" class="signature-design1">
            <div class="signature-label-design1">Principal</div>
        </div>
    </div>
</div>

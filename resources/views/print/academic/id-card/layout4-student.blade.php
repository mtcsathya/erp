<style>
    .id-card-design4 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: 1px solid #ddd;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }

    .top-stripe-design4 {
        height: 5px;
        background: linear-gradient(90deg, #4CAF50 0%, #45a049 100%);
    }

    .header-section-design4 {
        padding: 10px 12px;
        background: #fafafa;
        border-bottom: 2px solid #4CAF50;
    }

    .header-grid-design4 {
        display: table;
        width: 100%;
    }

    .logo-column-design4 {
        display: table-cell;
        width: 45px;
        vertical-align: middle;
    }

    .logo-img-design4 {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }

    .school-column-design4 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
    }

    .school-title-design4 {
        font-size: 11px;
        font-weight: 700;
        color: #333;
        margin: 0 0 2px 0;
        text-transform: uppercase;
    }

    .school-subtitle-design4 {
        font-size: 8px;
        color: #666;
        line-height: 1.2;
    }

    .body-section-design4 {
        padding: 12px;
    }

    .student-header-design4 {
        display: table;
        width: 100%;
        margin-bottom: 10px;
    }

    .photo-side-design4 {
        display: table-cell;
        width: 75px;
        vertical-align: middle;
    }

    .photo-frame-design4 {
        width: 70px;
        height: 70px;
        border: 2px solid #4CAF50;
        border-radius: 4px;
        overflow: hidden;
    }

    .photo-img-design4 {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .details-side-design4 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 10px;
    }

    .student-title-design4 {
        font-size: 14px;
        font-weight: 700;
        color: #333;
        margin: 0 0 3px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .id-number-design4 {
        font-size: 9px;
        color: #4CAF50;
        font-weight: 600;
        margin-bottom: 4px;
    }

    .class-info-design4 {
        font-size: 10px;
        color: #666;
        font-weight: 600;
        background: #f0f0f0;
        padding: 3px 6px;
        border-radius: 3px;
        display: inline-block;
    }

    .info-list-design4 {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid #f0f0f0;
    }

    .info-item-design4 {
        display: table;
        width: 100%;
        margin-bottom: 5px;
    }

    .label-cell-design4 {
        display: table-cell;
        width: 80px;
        font-size: 9px;
        color: #666;
        font-weight: 600;
        vertical-align: top;
    }

    .value-cell-design4 {
        display: table-cell;
        font-size: 9px;
        color: #333;
        font-weight: 500;
        vertical-align: top;
    }

    .footer-bar-design4 {
        text-align: center;
        padding: 8px;
        background: #fafafa;
        border-top: 1px solid #f0f0f0;
        margin-top: 10px;
    }

    .signature-img-design4 {
        width: 70px;
        height: auto;
    }

    .signature-text-design4 {
        font-size: 7px;
        color: #999;
        margin-top: 2px;
    }
</style>

<div class="id-card-design4">
    <div class="top-stripe-design4"></div>

    <div class="header-section-design4">
        <div class="header-grid-design4">
            <div class="logo-column-design4">
                <img src="#INSTITUTE_ICON#" alt="Logo" class="logo-img-design4">
            </div>
            <div class="school-column-design4">
                <div class="school-title-design4">#INSTITUTE_NAME#</div>
                <div class="school-subtitle-design4">#INSTITUTE_ADDRESS#</div>
            </div>
        </div>
    </div>

    <div class="body-section-design4">
        <div class="student-header-design4">
            <div class="photo-side-design4">
                <div class="photo-frame-design4">
                    <img src="#PHOTO#" alt="Photo" class="photo-img-design4">
                </div>
            </div>
            <div class="details-side-design4">
                <div class="student-title-design4">#NAME#</div>
                <div class="id-number-design4">ID: #ADMISSION_NUMBER#</div>
                <div class="class-info-design4">#COURSE_BATCH#</div>
            </div>
        </div>

        <div class="info-list-design4">
            <div class="info-item-design4">
                <div class="label-cell-design4">Father Name:</div>
                <div class="value-cell-design4">#FATHER_NAME#</div>
            </div>
            <div class="info-item-design4">
                <div class="label-cell-design4">Date of Birth:</div>
                <div class="value-cell-design4">#DOB#</div>
            </div>
            <div class="info-item-design4">
                <div class="label-cell-design4">Mobile:</div>
                <div class="value-cell-design4">#CONTACT_NUMBER#</div>
            </div>
            <div class="info-item-design4">
                <div class="label-cell-design4">Blood Group:</div>
                <div class="value-cell-design4">#BLOOD_GROUP#</div>
            </div>
            <div class="info-item-design4">
                <div class="label-cell-design4">Route:</div>
                <div class="value-cell-design4">#ROUTE_NAME#</div>
            </div>
            <div class="info-item-design4">
                <div class="label-cell-design4">Stoppage:</div>
                <div class="value-cell-design4">#STOPPAGE_NAME#</div>
            </div>
            <div class="info-item-design4">
                <div class="label-cell-design4">Address:</div>
                <div class="value-cell-design4">#ADDRESS#</div>
            </div>
        </div>
    </div>

    <div class="footer-bar-design4">
        <img src="#SIGNATURE#" alt="Signature" class="signature-img-design4">
        <div class="signature-text-design4">Principal's Signature</div>
    </div>
</div>

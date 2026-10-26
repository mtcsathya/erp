<style>
    .id-card-design2 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: 2px solid #e0e0e0;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12);
        overflow: hidden;
        position: relative;
    }

    .side-banner-design2 {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 8px;
        background: linear-gradient(180deg, #e91e63 0%, #c2185b 100%);
    }

    .content-design2 {
        margin-left: 8px;
        padding: 12px;
    }

    .top-section-design2 {
        text-align: center;
        padding-bottom: 10px;
        border-bottom: 2px solid #f5f5f5;
        margin-bottom: 10px;
    }

    .logo-design2 {
        height: 30px;
        margin: 0 auto 6px;
    }

    .logo-design2 img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .school-name-design2 {
        font-size: 12px;
        font-weight: 700;
        color: #e91e63;
        margin: 0 0 3px 0;
        text-transform: uppercase;
    }

    .school-address-design2 {
        font-size: 8px;
        color: #666;
        line-height: 1.2;
    }

    .student-section-design2 {
        display: table;
        width: 100%;
        margin-bottom: 10px;
    }

    .photo-col-design2 {
        display: table-cell;
        width: 70px;
        vertical-align: top;
    }

    .photo-design2 {
        width: 65px;
        height: 65px;
        border-radius: 8px;
        border: 3px solid #e91e63;
        object-fit: cover;
    }

    .info-col-design2 {
        display: table-cell;
        vertical-align: top;
        padding-left: 10px;
    }

    .student-name-design2 {
        font-size: 13px;
        font-weight: 700;
        color: #333;
        margin: 0 0 3px 0;
        text-transform: uppercase;
    }

    .admission-badge-design2 {
        display: inline-block;
        background: #e91e63;
        color: white;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 9px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    .course-design2 {
        font-size: 10px;
        color: #666;
        font-weight: 600;
    }

    .details-design2 {
        font-size: 9px;
        line-height: 1.6;
        color: #444;
    }

    .details-design2 p {
        margin: 3px 0;
    }

    .details-design2 strong {
        color: #666;
        font-weight: 600;
        display: inline-block;
        width: 75px;
    }

    .signature-section-design2 {
        text-align: right;
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px dashed #e0e0e0;
    }

    .signature-design2 {
        width: 70px;
        height: auto;
    }

    .signature-label-design2 {
        font-size: 8px;
        color: #999;
        margin-top: 2px;
    }
</style>

<div class="id-card-design2">
    <div class="side-banner-design2"></div>

    <div class="content-design2">
        <div class="top-section-design2">
            <div class="logo-design2">
                <img src="#INSTITUTE_LOGO#" alt="Logo">
            </div>
            <div class="school-name-design2">#INSTITUTE_NAME#</div>
            <div class="school-address-design2">#INSTITUTE_ADDRESS#</div>
        </div>

        <div class="student-section-design2">
            <div class="photo-col-design2">
                <img src="#PHOTO#" alt="Photo" class="photo-design2">
            </div>
            <div class="info-col-design2">
                <div class="student-name-design2">#NAME#</div>
                <div class="admission-badge-design2">#ADMISSION_NUMBER#</div>
                <div class="course-design2">#COURSE_BATCH#</div>
            </div>
        </div>

        <div class="details-design2">
            <p><strong>Father Name:</strong> #FATHER_NAME#</p>
            <p><strong>Date of Birth:</strong> #DOB#</p>
            <p><strong>Mobile No:</strong> #CONTACT_NUMBER#</p>
            <p><strong>Blood Group:</strong> #BLOOD_GROUP#</p>
            <p><strong>Route:</strong> #ROUTE_NAME#</p>
            <p><strong>Stoppage:</strong> #STOPPAGE_NAME#</p>
            <p><strong>Address:</strong> #ADDRESS#</p>
        </div>

        <div class="signature-section-design2">
            <img src="#SIGNATURE#" alt="Signature" class="signature-design2">
            <div class="signature-label-design2">Authorized Signature</div>
        </div>
    </div>
</div>

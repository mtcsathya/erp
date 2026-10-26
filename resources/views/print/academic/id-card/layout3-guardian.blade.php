<style>
    .guardian-card-single3 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: 3px solid #FF6F00;
        border-radius: 15px;
        background: #fff;
        box-shadow: 0 4px 15px rgba(255, 111, 0, 0.2);
        overflow: hidden;
    }

    .top-header-single3 {
        background: linear-gradient(135deg, #FF6F00 0%, #E65100 100%);
        padding: 6px 8px;
        color: white;
    }

    .header-table-single3 {
        display: table;
        width: 100%;
    }

    .logo-col-single3 {
        display: table-cell;
        width: 35px;
        vertical-align: middle;
    }

    .logo-round-single3 {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        padding: 4px;
    }

    .logo-round-single3 img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .school-col-single3 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 6px;
        text-align: left;
    }

    .school-heading-single3 {
        font-size: 12px;
        font-weight: 700;
        margin: 0 0 2px 0;
        text-transform: uppercase;
        line-height: 1.1;
    }

    .school-subheading-single3 {
        font-size: 11px;
        opacity: 0.95;
        line-height: 1.1;
    }

    .main-body-single3 {
        padding: 6px;
    }

    .title-banner-single3 {
        text-align: center;
        background: #FFF3E0;
        border: 1px solid #FFE0B2;
        padding: 3px;
        border-radius: 4px;
        margin-bottom: 6px;
    }

    .title-label-single3 {
        font-size: 10px;
        font-weight: 700;
        color: #E65100;
        text-transform: uppercase;
    }

    .guardian-row-single3 {
        display: table;
        width: 100%;
        margin-bottom: 6px;
        padding-bottom: 6px;
        border-bottom: 2px solid #FFF3E0;
    }

    .guardian-photo-single3 {
        display: table-cell;
        width: 60px;
        vertical-align: middle;
    }

    .photo-circle-single3 {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        border: 3px solid #FF6F00;
        object-fit: cover;
        position: relative;
        box-shadow: 0 2px 8px rgba(255, 111, 0, 0.2);
    }

    .active-badge-single3 {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 14px;
        height: 14px;
        background: #4CAF50;
        border-radius: 50%;
        border: 2px solid white;
    }

    .guardian-details-single3 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
    }

    .guardian-fullname-single3 {
        font-size: 12px;
        font-weight: 700;
        color: #333;
        margin: 0 0 3px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .relation-pill-single3 {
        display: inline-block;
        background: #FF6F00;
        color: white;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 11px;
        font-weight: 600;
        margin-bottom: 2px;
    }

    .contact-text-single3 {
        font-size: 10px;
        color: #666;
        font-weight: 600;
    }

    .ward-info-single3 {
        background: #FAFAFA;
        border: 1px solid #FFE0B2;
        border-radius: 6px;
        padding: 6px;
        margin-bottom: 6px;
    }

    .ward-heading-single3 {
        font-size: 10px;
        font-weight: 700;
        color: #E65100;
        margin-bottom: 3px;
        text-transform: uppercase;
    }

    .ward-details-single3 {
        font-size: 10px;
        color: #333;
        line-height: 1.4;
    }

    .ward-details-single3 p {
        margin: 2px 0;
    }

    .ward-details-single3 strong {
        color: #666;
    }

    .location-info-single3 {
        font-size: 10px;
        color: #666;
        line-height: 1.4;
        margin-bottom: 6px;
    }

    .location-info-single3 strong {
        color: #333;
    }

    .signature-section-single3 {
        text-align: center;
        padding-top: 5px;
        border-top: 2px dashed #FFE0B2;
    }

    .signature-image-single3 {
        width: 55px;
        height: auto;
        object-fit: contain;
    }

    .signature-text-single3 {
        font-size: 10px;
        color: #999;
        margin-top: 2px;
    }
</style>

<div class="guardian-card-single3">
    <div class="top-header-single3">
        <div class="header-table-single3">
            <div class="logo-col-single3">
                <div class="logo-round-single3">
                    <img src="#INSTITUTE_ICON#" alt="Logo">
                </div>
            </div>
            <div class="school-col-single3">
                <div class="school-heading-single3">#INSTITUTE_NAME#</div>
                <div class="school-subheading-single3">#INSTITUTE_ADDRESS#</div>
            </div>
        </div>
    </div>

    <div class="main-body-single3">
        <div class="title-banner-single3">
            <div class="title-label-single3">Guardian Identity Card</div>
        </div>

        <div class="guardian-row-single3">
            <div class="guardian-photo-single3">
                <div style="position: relative; display: inline-block;">
                    <img src="#PHOTO#" alt="Guardian" class="photo-circle-single3">
                    <div class="active-badge-single3"></div>
                </div>
            </div>
            <div class="guardian-details-single3">
                <div class="guardian-fullname-single3">#NAME#</div>
                <div class="relation-pill-single3">#RELATION#</div>
                <div class="contact-text-single3">📞 #CONTACT_NUMBER#</div>
            </div>
        </div>

        <div class="ward-info-single3">
            <div class="ward-heading-single3">Ward Information</div>
            <div class="ward-details-single3">
                <p><strong>Student Names:</strong> #STUDENT_NAMES#</p>
                <p><strong>Admission No:</strong> #STUDENT_ADMISSION_NUMBERS#</p>
                <p><strong>Course Batches:</strong> #STUDENT_COURSE_BATCHES#</p>
            </div>
        </div>

        <div class="location-info-single3">
            <strong>Residential Address:</strong> #ADDRESS#
        </div>

        <div class="signature-section-single3">
            <img src="#SIGNATURE#" alt="Signature" class="signature-image-single3">
            <div class="signature-text-single3">Authorized Signatory</div>
        </div>
    </div>
</div>

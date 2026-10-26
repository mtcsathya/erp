<style>
    .guardian-card-single1 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: 3px solid #2196F3;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0 4px 15px rgba(33, 150, 243, 0.2);
        overflow: hidden;
    }

    .header-single1 {
        background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
        padding: 6px 8px;
        color: white;
    }

    .header-grid-single1 {
        display: table;
        width: 100%;
    }

    .logo-section-single1 {
        display: table-cell;
        width: 35px;
        vertical-align: middle;
    }

    .logo-single1 {
        width: 32px;
        height: 32px;
        background: white;
        border-radius: 6px;
        padding: 3px;
    }

    .logo-single1 img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .school-section-single1 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 6px;
        text-align: left;
    }

    .school-name-single1 {
        font-size: 10px;
        font-weight: 700;
        margin: 0 0 2px 0;
        text-transform: uppercase;
        line-height: 1.1;
    }

    .school-address-single1 {
        font-size: 10px;
        opacity: 0.95;
        line-height: 1.1;
    }

    .body-single1 {
        padding: 6px;
    }

    .badge-title-single1 {
        background: #E3F2FD;
        color: #1976D2;
        text-align: center;
        padding: 3px;
        border-radius: 4px;
        font-size: 10px;
        font-weight: 700;
        margin-bottom: 6px;
        text-transform: uppercase;
    }

    .guardian-header-single1 {
        display: table;
        width: 100%;
        margin-bottom: 6px;
        padding-bottom: 6px;
        border-bottom: 2px solid #E3F2FD;
    }

    .photo-section-single1 {
        display: table-cell;
        width: 60px;
        vertical-align: middle;
    }

    .photo-single1 {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        border: 3px solid #2196F3;
        object-fit: cover;
        box-shadow: 0 2px 8px rgba(33, 150, 243, 0.2);
    }

    .info-section-single1 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
    }

    .guardian-name-single1 {
        font-size: 12px;
        font-weight: 700;
        color: #333;
        margin: 0 0 3px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .relation-badge-single1 {
        background: #2196F3;
        color: white;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 11px;
        font-weight: 600;
        display: inline-block;
        margin-bottom: 3px;
    }

    .contact-single1 {
        font-size: 10px;
        color: #666;
        font-weight: 600;
    }

    .children-box-single1 {
        background: #F5F5F5;
        border: 1px solid #E3F2FD;
        border-radius: 6px;
        padding: 6px;
        margin-bottom: 6px;
    }

    .box-title-single1 {
        font-size: 8px;
        font-weight: 700;
        color: #1976D2;
        margin-bottom: 3px;
        text-transform: uppercase;
    }

    .box-content-single1 {
        font-size: 10px;
        color: #333;
        line-height: 1.4;
    }

    .box-content-single1 p {
        margin: 2px 0;
    }

    .box-content-single1 strong {
        color: #666;
        font-weight: 600;
    }

    .address-section-single1 {
        font-size: 10px;
        color: #666;
        line-height: 1.4;
        margin-bottom: 6px;
    }

    .address-section-single1 strong {
        color: #333;
        font-weight: 700;
    }

    .footer-single1 {
        text-align: center;
        padding-top: 5px;
        border-top: 1px dashed #e0e0e0;
    }

    .signature-single1 {
        width: 55px;
        height: auto;
        object-fit: contain;
    }

    .auth-text-single1 {
        font-size: 10px;
        color: #999;
        margin-top: 2px;
    }
</style>

<div class="guardian-card-single1">
    <div class="header-single1">
        <div class="header-grid-single1">
            <div class="logo-section-single1">
                <div class="logo-single1">
                    <img src="#INSTITUTE_ICON#" alt="Logo">
                </div>
            </div>
            <div class="school-section-single1">
                <div class="school-name-single1">#INSTITUTE_NAME#</div>
                <div class="school-address-single1">#INSTITUTE_ADDRESS#</div>
            </div>
        </div>
    </div>

    <div class="body-single1">
        <div class="badge-title-single1">Guardian Identity Card</div>

        <div class="guardian-header-single1">
            <div class="photo-section-single1">
                <img src="#PHOTO#" alt="Guardian" class="photo-single1">
            </div>
            <div class="info-section-single1">
                <div class="guardian-name-single1">#NAME#</div>
                <div class="relation-badge-single1">#RELATION#</div>
                <div class="contact-single1">📞 #CONTACT_NUMBER#</div>
            </div>
        </div>

        <div class="children-box-single1">
            <div class="box-title-single1">Ward Information</div>
            <div class="box-content-single1">
                <p><strong>Student Names:</strong> #STUDENT_NAMES#</p>
                <p><strong>Admission Numbers:</strong> #STUDENT_ADMISSION_NUMBERS#</p>
                <p><strong>Classes:</strong> #STUDENT_COURSE_BATCHES#</p>
            </div>
        </div>

        <div class="address-section-single1">
            <strong>Address:</strong> #ADDRESS#
        </div>

        <div class="footer-single1">
            <img src="#SIGNATURE#" alt="Signature" class="signature-single1">
            <div class="auth-text-single1">Authorized Signatory</div>
        </div>
    </div>
</div>

<style>
    .employee-card-design4 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: 3px solid #FF6F00;
        border-radius: 15px;
        background: #fff;
        box-shadow: 0 4px 15px rgba(255, 111, 0, 0.2);
        overflow: hidden;
        position: relative;
    }

    .corner-design-emp4 {
        position: absolute;
        top: 0;
        right: 0;
        width: 45px;
        height: 45px;
        background: linear-gradient(135deg, #FF6F00 0%, #E65100 100%);
        border-bottom-left-radius: 100%;
    }

    .header-section-emp4 {
        background: linear-gradient(135deg, #FF6F00 0%, #E65100 100%);
        padding: 8px 10px;
        color: white;
        position: relative;
    }

    .header-flex-emp4 {
        display: table;
        width: 100%;
    }

    .logo-side-emp4 {
        display: table-cell;
        width: 45px;
        vertical-align: middle;
    }

    .logo-circle-emp4 {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        padding: 5px;
    }

    .logo-circle-emp4 img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .company-side-emp4 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
        text-align: left;
    }

    .company-name-emp4 {
        font-size: 11px;
        font-weight: 700;
        margin: 0 0 2px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .company-addr-emp4 {
        font-size: 7px;
        opacity: 0.95;
        line-height: 1.2;
    }

    .main-content-emp4 {
        padding: 8px;
    }

    .emp-header-emp4 {
        display: table;
        width: 100%;
        margin-bottom: 6px;
    }

    .photo-section-emp4 {
        display: table-cell;
        width: 65px;
        vertical-align: middle;
    }

    .photo-frame-emp4 {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 3px solid #FF6F00;
        object-fit: cover;
        position: relative;
    }

    .status-badge-emp4 {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 16px;
        height: 16px;
        background: #4CAF50;
        border-radius: 50%;
        border: 2px solid white;
    }

    .emp-info-section-emp4 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
    }

    .emp-fullname-emp4 {
        font-size: 12px;
        font-weight: 700;
        color: #333;
        margin: 0 0 3px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .emp-id-pill-emp4 {
        display: inline-block;
        background: #FFF3E0;
        color: #E65100;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 10px;
        font-weight: 600;
        border: 1px solid #FFE0B2;
        margin-bottom: 3px;
    }

    .emp-role-emp4 {
        background: #FF6F00;
        color: white;
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 9px;
        font-weight: 600;
        display: inline-block;
        margin-bottom: 2px;
    }

    .emp-dept-emp4 {
        font-size: 10px;
        color: #666;
        font-weight: 600;
    }

    .details-container-emp4 {
        background: #FAFAFA;
        border: 1px solid #f0f0f0;
        border-radius: 6px;
        padding: 6px;
        margin-bottom: 6px;
    }

    .detail-item-emp4 {
        display: table;
        width: 100%;
        margin-bottom: 3px;
    }

    .detail-item-emp4:last-child {
        margin-bottom: 0;
    }

    .detail-key-emp4 {
        display: table-cell;
        width: 65px;
        font-size: 8px;
        color: #666;
        font-weight: 600;
        vertical-align: top;
    }

    .detail-val-emp4 {
        display: table-cell;
        font-size: 10px;
        color: #333;
        font-weight: 500;
        vertical-align: top;
    }

    .sign-section-emp4 {
        text-align: center;
        padding-top: 5px;
        border-top: 2px dashed #FFE0B2;
    }

    .sign-image-emp4 {
        width: 60px;
        height: auto;
        object-fit: contain;
    }

    .sign-label-emp4 {
        font-size: 9px;
        color: #999;
        margin-top: 2px;
    }
</style>

<div class="employee-card-design4">
    <div class="corner-design-emp4"></div>

    <div class="header-section-emp4">
        <div class="header-flex-emp4">
            <div class="logo-side-emp4">
                <div class="logo-circle-emp4">
                    <img src="#INSTITUTE_ICON#" alt="Logo">
                </div>
            </div>
            <div class="company-side-emp4">
                <div class="company-name-emp4">#INSTITUTE_NAME#</div>
                <div class="company-addr-emp4">#INSTITUTE_ADDRESS#</div>
            </div>
        </div>
    </div>

    <div class="main-content-emp4">
        <div class="emp-header-emp4">
            <div class="photo-section-emp4">
                <div style="position: relative; display: inline-block;">
                    <img src="#PHOTO#" alt="Photo" class="photo-frame-emp4">
                    <div class="status-badge-emp4"></div>
                </div>
            </div>
            <div class="emp-info-section-emp4">
                <div class="emp-fullname-emp4">#NAME#</div>
                <div class="emp-id-pill-emp4">#EMPLOYEE_CODE#</div>
                <div class="emp-role-emp4">#DESIGNATION#</div>
                <div class="emp-dept-emp4">#DEPARTMENT#</div>
            </div>
        </div>

        <div class="details-container-emp4">
            <div class="detail-item-emp4">
                <div class="detail-key-emp4">Father:</div>
                <div class="detail-val-emp4">#FATHER_NAME#</div>
            </div>
            <div class="detail-item-emp4">
                <div class="detail-key-emp4">DOB:</div>
                <div class="detail-val-emp4">#DOB#</div>
            </div>
            <div class="detail-item-emp4">
                <div class="detail-key-emp4">Mobile:</div>
                <div class="detail-val-emp4">#CONTACT_NUMBER#</div>
            </div>
            <div class="detail-item-emp4">
                <div class="detail-key-emp4">Blood:</div>
                <div class="detail-val-emp4">#BLOOD_GROUP#</div>
            </div>
            <div class="detail-item-emp4">
                <div class="detail-key-emp4">Address:</div>
                <div class="detail-val-emp4">#ADDRESS#</div>
            </div>
        </div>

        <div class="sign-section-emp4">
            <img src="#SIGNATURE#" alt="Signature" class="sign-image-emp4">
            <div class="sign-label-emp4">Authority Signature</div>
        </div>
    </div>
</div>

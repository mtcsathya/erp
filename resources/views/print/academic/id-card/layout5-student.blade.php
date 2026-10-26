<style>
    .id-card-design5 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: 3px solid #FF9800;
        border-radius: 15px;
        background: #fff;
        box-shadow: 0 4px 15px rgba(255, 152, 0, 0.2);
        overflow: hidden;
        position: relative;
    }

    .corner-accent-design5 {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
        border-bottom-left-radius: 100%;
    }

    .header-block-design5 {
        background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
        padding: 8px 10px;
        color: white;
        position: relative;
    }

    .header-content-design5 {
        display: table;
        width: 100%;
    }

    .logo-cell-design5 {
        display: table-cell;
        width: 45px;
        vertical-align: middle;
    }

    .logo-circle-design5 {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        padding: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .logo-circle-design5 img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .school-cell-design5 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
        text-align: left;
    }

    .institute-name-design5 {
        font-size: 11px;
        font-weight: 700;
        margin: 0 0 2px 0;
        text-transform: uppercase;
        letter-spacing: 0.3px;
        line-height: 1.2;
    }

    .institute-address-design5 {
        font-size: 7px;
        opacity: 0.95;
        line-height: 1.2;
    }

    .content-area-design5 {
        padding: 8px;
    }

    .student-header-design5 {
        display: table;
        width: 100%;
        margin-bottom: 6px;
    }

    .photo-cell-design5 {
        display: table-cell;
        width: 70px;
        vertical-align: middle;
    }

    .photo-badge-design5 {
        position: relative;
        display: inline-block;
    }

    .photo-img-design5 {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 3px solid #FF9800;
        object-fit: cover;
        box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3);
    }

    .photo-badge-icon-design5 {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 18px;
        height: 18px;
        background: #4CAF50;
        border-radius: 50%;
        border: 2px solid white;
    }

    .name-cell-design5 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
    }

    .student-name-design5 {
        font-size: 12px;
        font-weight: 700;
        color: #333;
        margin: 0 0 4px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .admission-pill-design5 {
        display: inline-block;
        background: #FFF3E0;
        color: #E65100;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 8px;
        font-weight: 600;
        border: 1px solid #FFE0B2;
    }

    .course-badge-design5 {
        background: #FF9800;
        color: white;
        text-align: center;
        margin-top: 2px;
        padding: 5px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
    }

    .details-grid-design5 {
        background: #FAFAFA;
        border: 1px solid #f0f0f0;
        border-radius: 6px;
        padding: 4px 8px;
    }

    .detail-row-design5 {
        display: table;
        width: 100%;
        margin-bottom: 4px;
    }

    .detail-row-design5:last-child {
        margin-bottom: 0;
    }

    .detail-label-design5 {
        display: table-cell;
        width: 75px;
        font-size: 9px;
        color: #666;
        font-weight: 600;
        vertical-align: top;
    }

    .detail-value-design5 {
        display: table-cell;
        font-size: 9px;
        color: #333;
        font-weight: 500;
        vertical-align: top;
    }

    .signature-box-design5 {
        text-align: center;
        margin-top: 2px;
        padding-top: 2px;
        border-top: 2px dashed #FFE0B2;
    }

    .signature-image-design5 {
        width: 75px;
        height: auto;
    }

    .signature-label-design5 {
        font-size: 8px;
        color: #999;
        margin-top: 2px;
    }
</style>

<div class="id-card-design5">
    <div class="corner-accent-design5"></div>

    <div class="header-block-design5">
        <div class="header-content-design5">
            <div class="logo-cell-design5">
                <div class="logo-circle-design5">
                    <img src="#INSTITUTE_ICON#" alt="Logo">
                </div>
            </div>
            <div class="school-cell-design5">
                <div class="institute-name-design5">#INSTITUTE_NAME#</div>
                <div class="institute-address-design5">#INSTITUTE_ADDRESS#</div>
            </div>
        </div>
    </div>

    <div class="content-area-design5">
        <div class="student-header-design5">
            <div class="photo-cell-design5">
                <div class="photo-badge-design5">
                    <img src="#PHOTO#" alt="Photo" class="photo-img-design5">
                    <div class="photo-badge-icon-design5"></div>
                </div>
            </div>
            <div class="name-cell-design5">
                <div class="student-name-design5">#NAME#</div>
                <div class="admission-pill-design5">#ADMISSION_NUMBER#</div>
                <div class="course-badge-design5">#COURSE_BATCH#</div>
            </div>
        </div>

        <div class="details-grid-design5">
            <div class="detail-row-design5">
                <div class="detail-label-design5">Father:</div>
                <div class="detail-value-design5">#FATHER_NAME#</div>
            </div>
            <div class="detail-row-design5">
                <div class="detail-label-design5">DOB:</div>
                <div class="detail-value-design5">#DOB#</div>
            </div>
            <div class="detail-row-design5">
                <div class="detail-label-design5">Mobile:</div>
                <div class="detail-value-design5">#CONTACT_NUMBER#</div>
            </div>
            <div class="detail-row-design5">
                <div class="detail-label-design5">Blood Group:</div>
                <div class="detail-value-design5">#BLOOD_GROUP#</div>
            </div>
            <div class="detail-row-design5">
                <div class="detail-label-design5">Route:</div>
                <div class="detail-value-design5">#ROUTE_NAME#</div>
            </div>
            <div class="detail-row-design5">
                <div class="detail-label-design5">Stoppage:</div>
                <div class="detail-value-design5">#STOPPAGE_NAME#</div>
            </div>
            <div class="detail-row-design5">
                <div class="detail-label-design5">Address:</div>
                <div class="detail-value-design5">#ADDRESS#</div>
            </div>
        </div>

        <div class="signature-box-design5">
            <img src="#SIGNATURE#" alt="Signature" class="signature-image-design5">
        </div>
    </div>
</div>

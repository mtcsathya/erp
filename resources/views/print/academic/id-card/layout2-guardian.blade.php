<style>
    .guardian-card-single2 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: 2px solid #4CAF50;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0 3px 12px rgba(76, 175, 80, 0.15);
        overflow: hidden;
        position: relative;
    }

    .corner-accent-single2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, #4CAF50 0%, #388E3C 100%);
        border-bottom-right-radius: 100%;
    }

    .header-bar-single2 {
        background: linear-gradient(135deg, #4CAF50 0%, #388E3C 100%);
        padding: 6px 8px 6px 45px;
        color: white;
        text-align: center;
        position: relative;
    }

    .school-title-single2 {
        font-size: 12px;
        font-weight: 700;
        margin: 0 0 2px 0;
        text-transform: uppercase;
        line-height: 1.1;
    }

    .school-loc-single2 {
        font-size: 10px;
        opacity: 0.95;
        line-height: 1.1;
    }

    .content-single2 {
        padding: 6px;
    }

    .card-badge-single2 {
        background: #E8F5E9;
        border-left: 3px solid #4CAF50;
        padding: 3px 6px;
        margin-bottom: 6px;
    }

    .badge-text-single2 {
        font-size: 10px;
        font-weight: 700;
        color: #388E3C;
        text-transform: uppercase;
    }

    .parent-section-single2 {
        display: table;
        width: 100%;
        margin-bottom: 6px;
    }

    .photo-area-single2 {
        display: table-cell;
        width: 60px;
        vertical-align: middle;
    }

    .parent-photo-single2 {
        width: 55px;
        height: 55px;
        border-radius: 8px;
        border: 3px solid #4CAF50;
        object-fit: cover;
    }

    .details-area-single2 {
        display: table-cell;
        vertical-align: middle;
        padding-left: 8px;
    }

    .parent-name-single2 {
        font-size: 12px;
        font-weight: 700;
        color: #333;
        margin: 0 0 3px 0;
        text-transform: uppercase;
        line-height: 1.2;
    }

    .role-tag-single2 {
        display: inline-block;
        background: #4CAF50;
        color: white;
        padding: 2px 8px;
        border-radius: 3px;
        font-size: 11px;
        font-weight: 700;
        margin-bottom: 3px;
    }

    .mobile-info-single2 {
        font-size: 10px;
        color: #666;
        font-weight: 600;
    }

    .students-container-single2 {
        background: #FAFAFA;
        border: 1px solid #E8F5E9;
        border-radius: 6px;
        padding: 6px;
        margin-bottom: 6px;
    }

    .students-title-single2 {
        font-size: 10px;
        font-weight: 700;
        color: #388E3C;
        margin-bottom: 3px;
    }

    .students-data-single2 {
        font-size: 10px;
        color: #333;
        line-height: 1.4;
    }

    .students-data-single2 p {
        margin: 2px 0;
    }

    .students-data-single2 strong {
        color: #666;
    }

    .address-block-single2 {
        font-size: 10px;
        color: #666;
        line-height: 1.4;
        margin-bottom: 6px;
    }

    .address-block-single2 strong {
        color: #333;
    }

    .sign-area-single2 {
        text-align: center;
        padding-top: 5px;
        border-top: 1px dashed #E8F5E9;
    }

    .sign-img-single2 {
        width: 55px;
        height: auto;
        object-fit: contain;
    }

    .sign-label-single2 {
        font-size: 10px;
        color: #999;
        margin-top: 2px;
    }
</style>

<div class="guardian-card-single2">
    <div class="corner-accent-single2"></div>

    <div class="header-bar-single2">
        <div class="school-title-single2">#INSTITUTE_NAME#</div>
        <div class="school-loc-single2">#INSTITUTE_ADDRESS#</div>
    </div>

    <div class="content-single2">
        <div class="card-badge-single2">
            <div class="badge-text-single2">Parent ID Card</div>
        </div>

        <div class="parent-section-single2">
            <div class="photo-area-single2">
                <img src="#PHOTO#" alt="Guardian" class="parent-photo-single2">
            </div>
            <div class="details-area-single2">
                <div class="parent-name-single2">#NAME#</div>
                <div class="role-tag-single2">#RELATION#</div>
                <div class="mobile-info-single2">📱 #CONTACT_NUMBER#</div>
            </div>
        </div>

        <div class="students-container-single2">
            <div class="students-title-single2">Children Details</div>
            <div class="students-data-single2">
                <p><strong>Names:</strong> #STUDENT_NAMES#</p>
                <p><strong>Adm No:</strong> #STUDENT_ADMISSION_NUMBERS#</p>
                <p><strong>Classes:</strong> #STUDENT_COURSE_BATCHES#</p>
            </div>
        </div>

        <div class="address-block-single2">
            <strong>Address:</strong> #ADDRESS#
        </div>

        <div class="sign-area-single2">
            <img src="#SIGNATURE#" alt="Signature" class="sign-img-single2">
            <div class="sign-label-single2">Principal</div>
        </div>
    </div>
</div>

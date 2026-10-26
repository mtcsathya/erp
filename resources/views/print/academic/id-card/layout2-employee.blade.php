<style>
    .employee-card-design2 {
        height: {{ $height }}cm;
        width: {{ $width }}cm;
        border: 2px solid #43A047;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0 3px 12px rgba(67, 160, 71, 0.15);
        overflow: hidden;
        position: relative;
    }

    .vertical-stripe-emp2 {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 6px;
        background: linear-gradient(180deg, #43A047 0%, #388E3C 100%);
    }

    .content-emp2 {
        margin-left: 6px;
        padding: 8px;
    }

    .header-emp2 {
        text-align: center;
        padding-bottom: 6px;
        border-bottom: 2px solid #E8F5E9;
        margin-bottom: 6px;
    }

    .logo-emp2 {
        height: 40px;
        margin: 0 auto 4px;
    }

    .logo-emp2 img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .company-name-emp2 {
        font-size: 11px;
        font-weight: 700;
        color: #43A047;
        margin: 0 0 2px 0;
        text-transform: uppercase;
        line-height: 1.1;
    }

    .company-address-emp2 {
        font-size: 7px;
        color: #666;
        line-height: 1.2;
    }

    .employee-section-emp2 {
        display: table;
        width: 100%;
        margin-bottom: 6px;
    }

    .photo-side-emp2 {
        display: table-cell;
        width: 65px;
        vertical-align: top;
    }

    .photo-emp2 {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 3px solid #43A047;
        object-fit: cover;
    }

    .info-side-emp2 {
        display: table-cell;
        vertical-align: top;
        padding-left: 8px;
    }

    .emp-name-emp2 {
        font-size: 12px;
        font-weight: 700;
        color: #333;
        margin: 0 0 3px 0;
        text-transform: uppercase;
        line-height: 1.1;
    }

    .emp-id-badge-emp2 {
        display: inline-block;
        background: #43A047;
        color: white;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 8px;
        font-weight: 600;
        margin-bottom: 3px;
    }

    .emp-designation-emp2 {
        font-size: 9px;
        color: #666;
        font-weight: 600;
        margin-bottom: 2px;
    }

    .emp-department-emp2 {
        font-size: 11px;
        color: white;
        background: #66BB6A;
        padding: 2px 6px;
        border-radius: 10px;
        display: flex;
        justify-content: center
    }

    .employee-details-emp2 {
        font-size: 11px;
        line-height: 1.5;
    }

    .employee-details-emp2 p {
        margin: 3px 0;
    }

    .employee-details-emp2 strong {
        color: #666;
        font-weight: 600;
        display: inline-block;
        width: 60px;
    }

    .signature-area-emp2 {
        text-align: right;
        margin-top: 6px;
        padding-top: 5px;
        border-top: 1px dashed #e0e0e0;
    }

    .signature-emp2 {
        width: 60px;
        height: auto;
        object-fit: contain;
    }

    .signature-label-emp2 {
        font-size: 10px;
        color: #999;
        margin-top: 2px;
    }
</style>

<div class="employee-card-design2">
    <div class="vertical-stripe-emp2"></div>

    <div class="content-emp2">
        <div class="header-emp2">
            <div class="logo-emp2">
                <img src="#INSTITUTE_LOGO#" alt="Logo">
            </div>
            <div class="company-name-emp2">#INSTITUTE_NAME#</div>
            <div class="company-address-emp2">#INSTITUTE_ADDRESS#</div>
        </div>

        <div class="employee-section-emp2">
            <div class="photo-side-emp2">
                <img src="#PHOTO#" alt="Photo" class="photo-emp2">
            </div>
            <div class="info-side-emp2">
                <div class="emp-name-emp2">#NAME#</div>
                <div class="emp-id-badge-emp2">#EMPLOYEE_CODE#</div>
                <div class="emp-designation-emp2">#DESIGNATION#</div>
            </div>
        </div>

        <div class="emp-department-emp2">#DEPARTMENT#</div>

        <div class="employee-details-emp2">
            <p><strong>Father:</strong> #FATHER_NAME#</p>
            <p><strong>DOB:</strong> #DOB#</p>
            <p><strong>Mobile:</strong> #CONTACT_NUMBER#</p>
            <p><strong>Blood:</strong> #BLOOD_GROUP#</p>
            <p><strong>Address:</strong> #ADDRESS#</p>
        </div>

        <div class="signature-area-emp2">
            <img src="#SIGNATURE#" alt="Signature" class="signature-emp2">
            <div class="signature-label-emp2">Authorized Signature</div>
        </div>
    </div>
</div>

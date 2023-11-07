export const listToast = [
    { severity: 'success', summary: 'Successful' },
    { severity: 'error', summary: 'Error' },
    { severity: 'warn', summary: 'Warning' },
    { severity: 'info', summary: 'Info' },
]

export const toolTypes = [
    { name: 'Theo công ty', id: 'company' },
    { name: 'Theo tòa nhà', id: 'building' },
]

export const status = [
    { name: 'Active', id: 1 },
    { name: 'Inactive', id: 0 },
]

export const statusV2 = [
    { name: 'Active', id: 1 },
    { name: 'Inactive', id: 2 },
]

export const units = [
    { name: 'Công ty', id: 1 },
    { name: 'Dự án', id: 2 },
    { name: 'Phòng ban', id: 3 },
]

export const statusApartment = [
    { name: 'Để không', id: 0 },
    { name: 'Cho thuê', id: 1 },
    { name: 'Muốn cho thuê', id: 2 },
    { name: 'Đang ở', id: 3 },
    { name: 'Mới bàn giao', id: 4 },
    { name: 'Đang cải tạo', id: 5 },
]
export const promotions = [
    { id: 9, name: 'KM 20.000 cho căn hộ nộp 3 tháng tiền xe đạp điện' },
    { id: 6, name: 'KM 10 % cho căn hộ đóng 3 tháng phi xe đạp thường ' },
    { id: 5, name: 'KM 20.000vnđ cho căn hộ nộp 3 tháng phí xe máy thường' },
]
export const serviceApartment = [
    { id: 1, name: 'Phí dịch vụ – Xe ô tô – 1 – 232323' },
    { id: 2, name: 'Phí dịch vụ - Xe ô tô - 1 - 884222' },
    { id: 3, name: 'Phí dịch vụ - Xe ô tô cư dân – 1 - 884222' },
    { id: 4, name: 'Phí thu hộ BQT -' },
    { id: 5, name: 'Tiền nước của tòa VP -' },
]
export const type_vehicles = [
    { id: 1, name: 'Xe đạp' },
    { id: 2, name: 'Xe máy' },
    { id: 3, name: 'Ô tô' },
    { id: 4, name: 'Xe điện' }
]
export const services = [
    { id: 1, name: 'Phí dịch vụ - Xe ô tô - 1' },
    { id: 2, name: 'Phí thu hộ BQT' },
    { id: 3, name: 'Phí nước đầu kỳ' },
    { id: 4, name: 'Phí bổ sung -' }
]
export const category = [
    { id: 1, name: 'Đồ gia dụng' },
    { id: 2, name: 'Phòng cháy chữa cháy' },
    { id: 3, name: 'Đồ điện tử ' },
    { id: 4, name: 'Đồ thông cống' },
    { id: 5, name: 'Thiết bị thông minh' },
]
export const statusDebt = [
    { name: 'Trạng thái', id: 1 },
    { name: 'Chờ xác nhận', id: 2 },
    { name: 'Chờ gửi', id: 3 },
    { name: 'Quá hạn', id: 4 },
    { name: 'Đã thanh toán', id: 5 },
    { name: 'Đang thanh toán', id: 6 },
]
export const typeServiceNotification = [
    { name: 'Email', id: 'email', },
    { name: 'SMS', id: "sms" },

]

export const typeLogImport = [
    { name: 'Import thêm cư dân', id: 0 },
    { name: 'Import cập nhật cư cư dân', id: 1 },
    { name: 'Import căn hộ', id: 7 },
]
export const statementPeriod = [
    { name: 'Một kỳ bảng kê', id: 0 },
    { name: 'Một khoảng kỳ bảng kê', id: 1 },
    { name: 'Khoảng thời gian', id: 2 },
]

export const banking = [
    { id: 1, name: 'Việt Nam thịnh vượng' },
    { id: 2, name: 'Đầu tư và phát triển ' },
    { id: 3, name: 'Công thương Việt Name' },
    { id: 4, name: 'Quân Đội' },
    { id: 5, name: 'Kĩ Thương' },
    { id: 6, name: 'NN&PT Nông thôn Việt Nam' },
]

export const statusBuilding = [
    { id: 0, name: 'Đóng', color: '#F39C12' },
    { id: 1, name: 'Mở', color: '#30CB83' },
]

export const statusLogImport = [
    { id: 0, name: 'Thất bại', color: '#F39C12' },
    { id: 1, name: 'Thành công', color: '#30CB83' },
]

export const statusFormSetup = [
    { id: 0, name: 'Chưa duyệt', color: '#F39C12' },
    { id: 1, name: 'Đã duyệt', color: '#30CB83' },
]

export const relationshipOwner = [
    { id: 0, name: 'Chủ hộ' },
    { id: 1, name: 'Vợ chồng' },
    { id: 2, name: 'Con' },
    { id: 3, name: 'Bố, mẹ' },
    { id: 4, name: 'Anh, chị, em' },
    { id: 5, name: 'Khác' },
    { id: 6, name: 'Khách thuê' },
    { id: 7, name: 'Chủ hộ cũ' },
    { id: 8, name: 'Cháu' },
]

export const genders = [
    { id: 1, name: 'Nam' },
    { id: 2, name: 'Nữ' },
    { id: 3, name: 'Không xác định' },
]

export const typeRequest = [
    { id: 1, name: 'Thêm phương tiện' },
    { id: 2, name: 'Hủy phương tiện' },
    { id: 3, name: 'Cấp lại thẻ xe (có thông tin chi tiết)' },
    { id: 4, name: 'Chuyển đồ' },
    { id: 5, name: 'Sửa chữa' },
    { id: 6, name: 'Tiện ích' },
    { id: 7, name: 'Cấp lại thẻ xe (không có thông tin chi tiết)' },
]
export const serviceCharge = [
    { id: 0, name: 'Phí công ty' },
    { id: 2, name: 'Phí thu hộ' },
    { id: 3, name: 'Phí chủ đầu tư' },
    { id: 4, name: 'Phí ban quản trị' },
]
export const selectServiceCharge = [
    { id: 0, name: 'Phí khác' },
    { id: 2, name: 'Điện' },
    { id: 3, name: 'Phí dịch vụ' },
    { id: 4, name: 'Nước ' },
    { id: 5, name: 'Phương tiện' },
]
export const statusRequest = [
    { id: 1, name: 'BQL đang xử lý', color: '#9B59B6' },
    { id: 2, name: 'Chờ cư dân phản hồi', color: '#54A0FF' },
    { id: 3, name: 'Thành công', color: '#30CB83' },
    { id: 4, name: 'Hủy', color: '#E74C3C' },
    { id: 5, name: 'Chờ BQL xử lý', color: '#F39C12' },
    { id: 0, name: 'Chờ BQL xử lý', color: '#F39C12' },
]
export const statusNotifications = [
    { id: 1, name: 'Thành Công', color: '#9B59B6' },
    { id: 2, name: 'Đã gửi', color: '#54A0FF' },

]

export const statusOpinion = [
    { id: 0, name: 'Chờ BQL xử lý', color: '#F39C12' },
    { id: 1, name: 'Hoàn thành', color: '#30CB83' },
    { id: 2, name: 'Chờ cư dân phản hồi', color: '#54A0FF' },
    { id: 3, name: 'BQL đang xử lý', color: '#9B59B6' },
]

export const statusRepair = [
    { name: 'Chờ xử lý', id: 0, color: '#F39C12' },
    { name: 'BQL đang xử lý', id: 1, color: '#54A0FF' },
    { name: 'Chờ cư dân phản hồi', id: 2, color: '#9B59B6' },
    { name: 'Thành công', id: 3, color: '#F00098' },
    { name: 'Hủy', id: 4, color: '#EE00FF' },
    { name: 'Chờ xử lý', id: 5, color: '#00FFEE ' },
    { name: 'Duyệt', id: 6, color: '#00FC93' },
    { name: 'Chờ CĐT phản hồi', id: 7, color: '#21FA00' },
    { name: 'CĐT từ chối', id: 8, color: '#E74C3C' },
    { name: 'CĐT duyệt - YC cọc', id: 9, color: '#30CB83' },
    { name: 'Đã cọc', id: 10, color: '#FABB00' },
    { name: 'Đang thi công', id: 10, color: '#FABB00' },
    { name: 'Tạm dừng', id: 10, color: '#FABB00' },
]

export const residentOptions = [
    { name: 'Chờ xử lý', id: 0, color: '#F39C12' },
    { name: 'BQL đang xử lý', id: 1, color: '#54A0FF' },
    { name: 'Chờ cư dân phản hồi', id: 2, color: '#9B59B6' },
    { name: 'Thành công', id: 3, color: '#F00098' },
    { name: 'Hủy', id: 4, color: '#EE00FF' },
    { name: 'Chờ xử lý', id: 5, color: '#00FFEE ' },
    { name: 'Duyệt', id: 6, color: '#00FC93' },
    { name: 'Chờ CĐT phản hồi', id: 7, color: '#21FA00' },
    { name: 'CĐT từ chối', id: 8, color: '#E74C3C' },
    { name: 'CĐT duyệt - YC cọc', id: 9, color: '#30CB83' },
    { name: 'Đã cọc', id: 10, color: '#FABB00' },
    { name: 'Đang thi công', id: 10, color: '#FABB00' },
    { name: 'Tạm dừng', id: 10, color: '#FABB00' },
]

export const servicesRequest = [
    { id: 1, name: 'Thuê phòng cầu lông' },
    { id: 2, name: 'Phòng họp' },
]
export const transactionForm = [
    { id: 0, name: 'Tiền măt' },
    { id: 1, name: 'Chuyển khoản' },
    { id: 2, name: 'VNPay' },
]

export const ticketType = [
    { id: 0, name: 'Phiếu thu ký quỹ' },
    { id: 1, name: 'Phiếu hoàn ký quỹ' },
]
export const receiptList = [
    { id: 0, name: 'Phiếu hoàn tiền ký quỹ' },
    { id: 1, name: 'Phiếu thu ký quỹ' },
]
export const payments = [
    { id: 0, name: 'Tiền mặt' },
    { id: 1, name: 'Chuyển khoản' },
    { id: 2, name: 'VNPay' },
    { id: 3, name: 'Ví' },
]
export const types = [
    { id: 0, name: 'Phiếu thu' },
    { id: 1, name: 'Phiếu bảo có' },
    { id: 2, name: 'Phiếu thu khác' },
    { id: 3, name: 'Phiếu chi' },
    { id: 4, name: 'Phiếu chi khác' },
    { id: 5, name: 'Phiếu kế toán' },
]
export const typesOfPromotion = [
    { id: 0, name: 'VNĐ' },
    { id: 1, name: '%' },
]

export const typeServices = [
    {
        type: 1,
        title: 'Thông tin đăng kí phương tiện',
        columns: [
            { label: 'Chủ phương tiện', key: 'full_name' },
            { label: 'Loại xe', key: 'type_vehicles' },
            { label: 'Biển số xe', key: 'number_vehicles' },
            { label: 'Ngày bắt đầu sử dụng', key: 'date_begin' },
        ],
        images: [
            { label: 'Ảnh phương tiện', key: 'image_vehicles' },
            { label: 'Ảnh giấy đăng ký xe', key: 'image_reg_vehicles' },
            { label: 'Ảnh chứng minh thư', key: 'image_cmnd' },
        ],
    },
    {
        type: 2,
        title: 'Hủy phương tiện',
        columns: [
            { label: 'Biển số xe:', key: 'number_vehicles' },
            { label: 'Loại xe:', key: 'type_vehicles' },
            { label: 'Ngày kết thúc gửi:', key: 'date_end' },
            { label: 'Lý do:', key: 'reason' },
        ],
    },
    {
        type: 3,
        title: 'Cấp lại thẻ xe',
        columns: [
            { label: 'Biển số xe:', key: 'number_vehicles' },
            { label: 'Loại xe:', key: 'type_vehicles' },
            { label: 'Lý do:', key: 'reason' },
        ],
    },
    {
        type: 4,
        title: ' Đăng kí chuyển đồ vào',
        columns: [
            { label: 'Người đăng kí:', key: 'full_name' },
            { label: 'Số điện thoại', key: 'phone' },
            { label: 'Khung giờ đăng kí', key: 'times' },
            { label: 'Ngày đăng kí', key: 'date' },
            { label: 'Đồ vận chuyển', key: 'products' },
        ],
    },
    {
        type: 5,
        title: 'Đăng kí sửa chữa',
        columns: [
            { label: 'Người đăng kí', key: 'full_name' },
            { label: 'Điện thoại', key: 'phone' },
            { label: 'Thời gian dự kiến thi công', key: 'fromto' },
            { label: 'Đơn vị thi công', key: 'construction' },
            { label: 'Ghi chú', key: 'content' },
        ],
    },
    {
        type: 6,
        title: 'Đăng kí tiện ích',
        columns: [
            { label: 'Người đăng kí', key: 'full_name' },
            { label: 'Điện thoại', key: 'phone' },
            { label: 'Ngày đăng kí', key: 'date' },
            { label: 'Tiện ích', key: 'service_type' },
            { label: 'Khung giờ đăng kí', key: 'time' },
        ],
    },
    {
        type: 7,
        title: 'Đăng ký khách đến chơi',
        columns: [
            { label: 'Biển số xe:', key: 'number_vehicles' },
            { label: 'Loại xe:', key: 'number_vehicles' },
            { label: 'Lý do:', key: 'reason' },
        ],
    },
]

export const formTemplate = [
    {
        id: 1,
        name: 'Phiếu đăng ký cấp thẻ thang máy',
        params: '@ten_khach_hang , @can_ho , @email , @phone , @ngay_de_nghi',
    },
    { id: 2, name: 'Phiếu đăng ký hủy thẻ thang máy', params: '@ngay_de_nghi' },
    {
        id: 3,
        name: 'Phiếu đăng ký chuyển đồ',
        params: '@ten_khach_hang , @email , @can_ho , @dien_thoai_lien_he , @ngay_van_chuyen , @du_lieu',
    },
    {
        id: 4,
        name: 'Phiếu đăng ký sửa chữa',
        params: '@ten_khach_hang , @sdt_kh , @can_ho , @ten_nha_thau , @nguoi_chiu_trach_nhiem , @sdt_nha_thau , @start_time , @end_time , @ngay_bat_dau , @ngay_ket_thuc',
    },
    { id: 5, name: 'Phiếu đăng ký tiện ích', params: '@ten_khach_hang , @can_ho , @sdt , @ngay_de_nghi , @du_lieu' },
]

export const formTemplatesStatus = [
    { id: 1, name: 'Hiện' },
    { id: 2, name: 'Ẩn' },
]

export const ratedService = [
    { id: -1, name: 'Chưa hài lòng', color: '#F39C12' },
    { id: 1, name: 'Bình thường', color: '#54A0FF' },
    { id: -3, name: 'Rất không hài lòng', color: '#9B59B6' },
    { id: 3, name: 'Hài lòng', color: '#30CB83' },
    { id: 5, name: 'Rất hài lòng', color: '#30CB83' },
]

export const objectRate = [
    { id: 1, name: 'Cư dân' },
    { id: 2, name: 'Khách vãng lai' },
]

export const prices = [
    { name: 'Một giá (giá cố định)', id: 1 },
    { name: 'Lũy tiến (tính giá theo bậc thang)', id: 2 },
]

export const typeBdcPrices = [
    { name: 'Giá tiền/tháng', id: 1 },
    { name: 'Giá tiền/m2/tháng', id: 2 },
]
export const statusLog = [
    // { id: 1, name: 'ReadyToSend', severity: '#F59E0B' },
    // { id: 2, name: 'WaitingToRetry', severity: '#F59E0B' },
    { id: '3', name: 'Đang gửi', color: '#54A0FF' },
    { id: '4', name: 'Có lỗi', color: '#EF4444' },
    { id: '5', name: 'Đã gửi', color: '#30CB83' },
    // { id: 6, name: 'Opened', color: 'success' },
    // { id: 7, name: 'Clicked', color: 'info' },
    { id: '8', name: 'Hủy nhận mail', color: '#F59E0B' },
    { id: '9', name: 'Mail không tồn tại', color: '#F59E0B' },
    { id: '00', name: 'Thành công', color: '#30CB83' },
    { id: '02', name: 'Độ dài không hợp lệ', color: '#EF4444' },
    { id: '04', name: 'Sai thông tin xác thực', color: '#EF4444' },
    { id: '05', name: 'Mất kết nối đến nhà cung cấp', color: '#EF4444' },
    { id: '06', name: 'Ip không được phép truy cập', color: '#EF4444' },
    { id: '07', name: 'Chưa nhận tin MO từ khách hàng', color: '#EF4444' },
    { id: '12', name: 'Không hỗ trợ tin unicode', color: '#EF4444' },
    { id: '14', name: 'Số lượng bản tin quá nhiều', color: '#EF4444' },
    { id: '15', name: 'Sai chữ ký', color: '#EF4444' },
    { id: '80', name: 'Không tìm thấy đối tác', color: '#EF4444' },
    { id: '81', name: 'Đối tác chưa được hỗ trợ', color: '#EF4444' },
    { id: '83', name: 'Nhà cung cấp chưa được hỗ trợ', color: '#EF4444' },
    { id: '84', name: 'Chưa định tuyến dịch vụ', color: '#EF4444' },
    { id: '85', name: 'Sai sender', color: '#EF4444' },
    { id: '86', name: 'Sai từ khóa', color: '#EF4444' },
    { id: '87', name: 'Sai mẫu tin nhắn', color: '#EF4444' },
    { id: '88', name: 'Thuê bao Viettel chưa được mã hóa', color: '#EF4444' },
    { id: '89', name: 'Thuê bao mạng khác Viettel nhưng đã mã hóa', color: '#EF4444' },
    { id: '97', name: 'Sai dữ liệu đầu vào', color: '#EF4444' },
    { id: '90', name: 'Tin nhắn trùng lặp', color: '#EF4444' },
    { id: '99', name: 'Lỗi ngoại lệ', color: '#EF4444' },
]

export const typePrices = [
    { name: 'Dịch vụ', id: 1 },
    { name: 'Phương tiện', id: 2 },
]

export const object = [
    { name: 'Công ty', id: 1 },
    { name: 'Thu hộ', id: 2 },
    { name: 'Chủ đầu tư', id: 3 },
]
export const typeElectricMeter = [
    { id: 0, name: 'Điện ', },
    { id: 1, name: 'Nước', },
    { id: 2, name: 'Nước nóng', },
]

export const typeBuidingServices = [
    { id: 0, name: 'Phí khác ', },
    { id: 2, name: 'Phí dịch vụ', },
    { id: 3, name: 'Phí nước', },
    { id: 4, name: 'Phí phương tiện', },
    { id: 5, name: 'Phí điện', },
    { id: 6, name: 'Phí nước nóng', },
]

export const typeVehiclesService = [
    { id: 0, name: 'Phí khác ', },
    { id: 2, name: 'Phí dịch vụ', },
    { id: 3, name: 'Phí nước', },
    { id: 4, name: 'Phí phương tiện', },
    { id: 5, name: 'Phí điện', },
    { id: 6, name: 'Phí nước nóng', },
]

export const listVehicleService = [
    { id: 1, name: 'Xe đạp', },
    { id: 2, name: 'Xe máy', },
    { id: 3, name: 'Ô tô', },
    { id: 4, name: 'Xe điện', },
]

export const typeServicesGroup = [
    { id: 1, name: 'Phí công ty', },
    { id: 2, name: 'Phí thu hộ', },
    { id: 3, name: 'Phí chủ đầu tư', },
    { id: 4, name: 'Ban quản trị', },
]
export const TemplateEmail = [
    { id: 'bdc', name: 'BDC' },
    { id: 'asahi', name: 'Asahi' },
]

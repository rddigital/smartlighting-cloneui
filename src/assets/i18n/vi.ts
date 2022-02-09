export const locale = {
  lang: 'vi',
  data: {
    COMMON: {
      TOAST: {
        TITLE_SUCCESS: 'Thành công',
        TITLE_ERROR: 'Lỗi',
        TITLE_WARNING: 'Thông báo',
      },
      ERROR: {
        SYSTEM_ERROR: 'Lỗi hệ thống, vui lòng thử lại.',
        PERMISSION_DENIED: 'Bạn không có quyền thực hiện chức năng này',
        SESSION_NOT_FOUND: 'Đã hết phiên đăng nhập, vui lòng đăng nhập lại',
        USER_NOT_FOUND: 'Thông tin người dùng không chính xác',
        OBJECT_NOT_FOUND: 'Thông tin không tồn tại',
        MORE_THAN_ONE_USER: 'Có nhiều hơn một người dùng',
        USER_NOT_ACTIVE: 'Người dùng chưa được kích hoạt',
        WRONG_OLD_PASSWORD: 'Mật khẩu cũ nhập vào không chính xác',
        UPLOADED_FILE_NOT_FOUND: 'Không tìm thấy file upload',
        WRONG_FORMAT_UPLOAD_FILE: 'File upload không đúng định dạng',
        EXCEED_LIMITED_UPLOAD_FILE: 'Vượt quá dung lượng upload',
        INVALID_CAPTCHA: 'Captcha không hợp lệ',
        UPDATE_SAME_CHILD_AND_PARENT: 'Không được cập nhật cha và con giống nhau',
        FILE_NOT_FOUND: 'Không tìm thấy file'
      },
      VALIDATION: {
        REQUIRED: 'Trường này bắt buộc nhập',
        EMAIL_FORMAT: 'Định dạng email không đúng',
        PHONE_FORMAT: 'Định dạng số điện thoại chưa đúng (từ 9 số trở lên, bắt đầu là số 0)',
        USER_ID_FORMAT: 'Tên đăng nhập chỉ được nhập chữ và số',
        UPLOAD_AVATAR: 'File ảnh upload định dạng jpg/jpeg,png và không quá 1MB',
        SAME_PASSWORD_CONFIRM: 'Mật khẩu xác nhận không trùng với mật khẩu đã nhập',
        CODE_FORMAT: 'Trường này chỉ được nhập ký tự không dấu, số, ký tự _',
        MIN_LENGTH: 'Bao gồm ít nhất {{vKey.requiredLength}} ký tự',
        MAX_LENGTH: 'Bao gồm tối đa {{vKey.requiredLength}} ký tự',
        POSITIVE_INTEGER: 'Trường này phải nhập số nguyên dương',
        POSITIVE_FLOAT: 'Trường này chỉ được nhập số dương',
        POSITIVE_FLOAT_NONZERO: 'Trường này chỉ được nhập số lớn hơn 0',
        EQUAL_THAN: 'Giá trị kết thúc không được nhỏ hơn giá trị bắt đầu',
        PASSWORD_FORMAT: 'Mật khẩu phải dài trên 8 ký tự, chức các ký tự hoa, thường, số, ký tự đặc biệt',
        START_DATE: 'Ngày canh tác không được lớn hơn ngày thu hoạch',
        HARVEST_DATE: 'Ngày thu hoạch không được nhỏ hơn ngày canh tác',
        FIRST_DATE: 'Ngày bắt đầu không được lớn hơn ngày kết thúc',
        END_DATE: 'Ngày kết thúc không được nhỏ hơn ngày bắt đầu',
        POSITIVE_NUMBER_ONLY_REQUIRED : 'Trường này chỉ được nhập số dương '
      },
      LABEL: {
        REGISTER_INFO: 'Thông tin đăng ký',
        LOGIN: 'Thông tin đăng nhập',
        USER_NAME: 'Tên đăng nhập',
        PASSWORD: 'Mật khẩu',
        ADDRESS: 'Địa chỉ',
        PHONE: 'Số điện thoại',
        CONTACT_ADDRESS: 'Địa chỉ liên hệ',
        CURRENT_PASSWORD: 'Mật khẩu hiện tại',
        NEW_PASSWORD: 'Mật khẩu mới',
        CONFIRM_PASSWORD: 'Xác nhận mật khẩu',
        KEYWORD: 'Từ khóa',
        STATUS: 'Trạng thái',
        LEVEL: 'Level',
        ORDER: 'STT',
        CODE: 'Mã',
        NAME: 'Tên',
        NO_DATA: 'Không có dữ liệu',
        PARENT_MENU: 'Menu cha',
        MENU: 'Menu',
        YES: 'Có',
        NO: 'Không',
        BACK: 'Quay lại',
        SAVE: 'Lưu lại',
        EDIT: 'Cập nhật',
        DELETE: 'Xóa',
        ADD: 'Thêm mới',
        SEARCH: 'Tìm kiếm',
        SAVE_CLOSE: 'Lưu và đóng',
        SAVE_CONTINUE: 'Lưu và tiếp tục',
        LOADING: 'Đang lấy dữ liệu...',
        ACTION: 'Thao tác',
        CONFIRM_DELETE: 'Bạn có xác nhận xóa không?',
        CLOSE: 'Đóng',
        CLEAR_FILE: 'Xóa file',
        UPLOAD_FILE: 'Tải lên',
        STT: 'STT',
        SELECT_ALL: 'Tất cả',
        ACTIVE: 'Hoạt động',
        DEACTIVATE: 'Hủy',
        PRINT: 'In',
        EXPORT_EXCEL: 'Xuất excel',
        CONFIRM: 'Xác nhận',
        JOIN_ROLE_NAME: 'Vai trò tham gia',
        REQUESTED_DATE: 'Ngày yêu cầu',
        PRODUCTION_PLAN: 'Kế hoạch sản xuất',
        REQUEST_UNIT: 'Đơn vị yêu cầu',
        VIEW_DETAIL: 'Xem chi tiết',
        ACCEPT: 'Chấp nhận',
        PROCESSING: 'Đang xử lý...',
        RESET_PASSWORD: 'Reset mật khẩu',
        RESET_PASSWORD_FOR_ACCOUNT: 'Reset mật khẩu cho tài khoản',
        RESET_PASSWORD_SUCCESS: 'Reset mật khẩu thành công',
        RESET_PASSWORD_SUCCESS_CONTENT: 'Tài khoản {{userId}} đã được reset mật khẩu về {{password}}',
        RETYPE_PASSWORD: 'Nhập lại mật khẩu',
        FROM_DATE: 'Từ ngày',
        TO_DATE: 'Đến ngày',
        PRODUCTION_DATE: 'Ngày sản xuất',
        HARVEST_DATE: 'Ngày thu hoạch',
        EXECUTION_AREA: 'Khu vực thực hiện',
        QUANTITY: 'Sản lượng',
        EXECUTION_UNIT: 'Đơn vị thực hiện',
        DELIVERY: 'Giao hàng',
        JOINED: 'Đã tham gia',
        INVITING: 'Đang được mời',
        CREATED_DATE: 'Ngày tạo',
        CREATOR: 'Người tạo',
        SEND_TO: 'Chuyển đến',
        PRODUCE: 'Sản xuất',
        VIEW: 'Xem',
        SELECT_FILE: 'Chọn file',
        MAX_FILE_UPLOAD: 'Upload tối đa {{maxFile}} file!',
        FILE_NAME: 'Tên file',
        FILE_SIZE: 'Kích cỡ',
        FILE_PREVIEW: 'Xem trước',
        SEND: 'Gửi',
        REJECT: 'Từ chối',
        CANCEL: 'Hủy',
        REPORT_FILE: 'Xuất file báo cáo',
        WAITING_ACTIVE: 'Chờ kích hoạt',
        UNIT_PROFILE: 'Hồ sơ đơn vị'
      },
      CBB: {
        SELECT_PROVINCE: 'Chọn tỉnh trong danh sách',
        SELECT_AREA: 'Chọn địa bàn trong danh sách',
        SELECT_BUSINESS_TYPE: 'Chọn Vai trò trong sản xuất',
        SELECT_PRODUCT: 'Chọn một sản phẩm',
        SELECT_PRODUCT_TYPE: 'Chọn một loại sản phẩm',
        SELECT_SP_UNIT: 'Chọn một đơn vị hỗ trợ',
        SELECT_PROCESS: 'Chọn một quy trình',
        SELECT_PROCESS_TYPE: 'Chọn một loại quy trình',
        SELECT_AREA_UNIT: 'Chọn một đơn vị diện tích',
        SELECT_QUANTITY_UNIT: 'Chọn một đơn vị sản lượng',
        SELECT_HARVEST_CODE: 'Chọn một mã thu hoạch',
        SELECT_PROD_PLAN: 'Chọn một kế hoạch sản xuất',
        SELECT_COMPANY: 'Chọn doanh nghiệp',
      }
    },
    LOGIN: {
      MSG: {
        LOGGED_IN_SUCCESS: 'Đăng nhập thành công',
      },
      REGISTRATION: 'Thông tin đăng nhập',
      USER_ID: 'Tài khoản',
      PASSWORD: 'Mật khẩu',
      REMEMBER_ME: 'Ghi nhớ tài khoản',
      FORGOT_PASSWORD: 'Quên mật khẩu',
      SUBMIT: 'Đăng nhập',
      DONT_HAVE_ACC: 'Chưa có tài khoản ?',
      HAVE_ACC: 'Đã có tài khoản ?',
      REGISTER_NEW: 'Đăng ký',
    },
    REGISTER: {
      TITLE: 'Đăng ký thành viên chuỗi',
      USER_ID: 'Tên đăng nhập',
      NAME: 'Họ và tên đầy đủ',
      PROVINCE: 'Tỉnh/ Thành phố',
      DISTRICT: 'Quận huyện',
      WARD: 'Phường xã',
      ADDRESS: 'Địa chỉ liên hệ',
      PHONE: 'Số điện thoại',
      EMAIL: 'Thư điện tử',
      TYPE: 'Vai trò trong chuỗi',
      AVATAR: 'Ảnh dại diện',
      MORE_INFO: 'Giới thiệu thêm',

      PH_USER_ID: 'Nhập vào tên đăng nhập để sử dụng',
      PH_NAME: 'Họ và tên đầy đủ',
      PH_PROVINCE: 'Chọn trong danh sách',
      PH_DISTRICT: 'Quận huyện',
      PH_WARD: 'Phường xã',
      PH_ADDRESS: 'Nhập địa chỉ liên hệ',
      PH_PHONE: 'Nhập số điện thoại di động',
      PH_EMAIL: 'Nhập thư điện tử',
      PH_TYPE: 'Vai trò trong chuỗi',
      PH_AVATAR: 'Ảnh dại diện',
      PH_MORE_INFO: 'Giới thiệu thêm',

      SIGN_UP_NOW: 'Đăng ký',
      CONFIRM_SUCCESS: 'Đăng ký thành viên thành công!',
      CONFIRM_FAIL: 'Đăng ký thành viên không thành công!',
    },
    MENU: {
      REGISTER: 'Đăng ký',
      INFO: 'Thông tin',
      PRODUCT_EVALUATION: 'Đánh giá sản xuất',
      SEARCH: 'Tra cứu',
      DASHBOARD: 'Trang chủ',
      PROFILE: 'Thông tin cá nhân',
      LOGOUT: 'Đăng xuất',
      HOME: 'Trang chủ'
    },
    PROFILE: {
      TITLE: 'Thông tin tài khoản',
      INFORMATION: 'Thông tin người dùng',
      CHANGE_INFORMATION: 'Thay đổi thông tin',
      CHANGE_AVATAR: 'Thay ảnh đại diện',
      CHANGE_PASSWORD: 'Đổi mật khẩu'
    },
    USER_TYPE: {
      TITLE: 'Vai trò',
      LIST_TITLE: 'Danh mục Vai trò',
      NAME: 'Tên Vai trò',
      CODE: 'Mã',
      DETAIL: 'Chi tiết'
    },

  }
};
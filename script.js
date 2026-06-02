
// ===== DATA =====
const data = {
    1: [

        { q: "Câu 1. Hệ thống thông tin là gì?", options: ["Tập hợp máy tính trong tổ chức", "Tập hợp con người, phần cứng, phần mềm, dữ liệu và quy trình để xử lý thông tin", "Chỉ bao gồm phần mềm quản lý", "Hệ thống lưu trữ dữ liệu"], answer: "B" },

        { q: "Câu 2. Vai trò quan trọng của hệ thống thông tin trong tổ chức là gì?", options: ["Chỉ dùng để lưu trữ dữ liệu", "Hỗ trợ quản lý, ra quyết định và nâng cao hiệu quả hoạt động", "Thay thế hoàn toàn con người", "Chỉ phục vụ kế toán"], answer: "B" },

        { q: "Câu 3. Thành phần nào của hệ thống thông tin chịu trách nhiệm lưu trữ và xử lý dữ liệu vật lý?", options: ["Phần cứng", "Dữ liệu", "Quy trình", "Con người"], answer: "A" },

        { q: "Câu 4. Thành phần nào quy định các bước thực hiện công việc trong hệ thống thông tin?", options: ["Phần mềm", "Dữ liệu", "Quy trình", "Mạng truyền thông"], answer: "C" },

        { q: "Câu 5. Giai đoạn đầu tiên trong mô hình thác nước là gì?", options: ["Kiểm thử", "Lập trình", "Thiết kế hệ thống", "Khảo sát và xác định yêu cầu"], answer: "D" },

        { q: "Câu 6. Nhược điểm lớn của mô hình thác nước là gì?", options: ["Khó thay đổi yêu cầu khi dự án đang thực hiện", "Quản lý rủi ro tốt", "Linh hoạt cao", "Dễ sửa lỗi"], answer: "A" },

        { q: "Câu 7. Mô hình nào thực hiện phát triển hệ thống theo các vòng lặp?", options: ["Thác nước", "Xoắn ốc", "Chữ V", "Agile"], answer: "B" },

        { q: "Câu 8. Ưu điểm nổi bật của mô hình xoắn ốc là gì?", options: ["Chi phí thấp", "Quản lý rủi ro tốt", "Dễ triển khai hơn mọi mô hình khác", "Không cần tài liệu"], answer: "B" },

        { q: "Câu 9. Vì sao mô hình xoắn ốc phù hợp với các dự án có yêu cầu thay đổi liên tục?", options: ["Không cần kiểm thử", "Có khả năng điều chỉnh qua từng vòng lặp", "Chi phí thấp nhất", "Không cần quản lý dự án"], answer: "B" },

        { q: "Câu 10. Đặc điểm nào giúp mô hình xoắn ốc giảm rủi ro?", options: ["Phân tích và đánh giá rủi ro ở mỗi vòng lặp", "Bỏ qua kiểm thử", "Không thay đổi yêu cầu", "Giảm tài liệu dự án"], answer: "A" },

        { q: "Câu 11. Mục đích chính của việc phân tích yêu cầu người dùng là gì?", options: ["Xây dựng hệ thống đúng nhu cầu sử dụng", "Giảm số lượng nhân viên", "Tăng giá thành dự án", "Loại bỏ kiểm thử"], answer: "A" },

        { q: "Câu 12. Nếu phân tích yêu cầu không chính xác, hậu quả có thể là gì?", options: ["Hệ thống đáp ứng tốt nhu cầu", "Giảm thời gian phát triển", "Tăng chi phí sửa đổi và sai sót", "Tăng năng suất ngay lập tức"], answer: "C" },

        { q: "Câu 13. ERD được sử dụng để mô tả nội dung nào?", options: ["Giao diện người dùng", "Cấu trúc dữ liệu và mối quan hệ giữa các thực thể", "Quy trình kiểm thử", "Mạng máy tính"], answer: "B" },

        { q: "Câu 14. DFD được dùng để mô tả điều gì?", options: ["Luồng dữ liệu và quá trình xử lý thông tin", "Thiết kế giao diện", "Cấu trúc phần cứng", "Chi phí dự án"], answer: "A" },

        { q: "Câu 15. Chức năng chính của hệ thống thông tin quản lý (MIS) là gì?", options: ["Chỉ lưu trữ dữ liệu", "Cung cấp thông tin phục vụ quản lý và ra quyết định", "Thay thế nhân viên quản lý", "Kiểm tra phần cứng"], answer: "B" },

        { q: "Câu 16. Điểm khác biệt của MIS so với các hệ thống thông tin khác là gì?", options: ["Tập trung cung cấp báo cáo tổng hợp cho nhà quản lý", "Chỉ phục vụ khách hàng", "Không cần dữ liệu", "Chỉ dùng trong sản xuất"], answer: "A" },

        { q: "Câu 17. BMIS là viết tắt của hệ thống nào?", options: ["Hệ thống thông tin quản lý giáo dục", "Hệ thống thông tin sản xuất kinh doanh", "Hệ thống thông tin y tế", "Hệ thống thông tin mạng"], answer: "B" },

        { q: "Câu 18. Ví dụ nào sau đây là hệ thống BMIS?", options: ["Hệ thống quản lý bán hàng", "Trò chơi điện tử", "Phần mềm nghe nhạc", "Trình duyệt web"], answer: "A" },

        { q: "Câu 19. Phân tích rủi ro trong phát triển hệ thống thông tin nhằm mục đích gì?", options: ["Tăng số lượng lỗi", "Phát hiện sớm các nguy cơ ảnh hưởng đến dự án", "Giảm tài liệu dự án", "Loại bỏ người quản lý"], answer: "B" },

        { q: "Câu 20. Bước nào thuộc quá trình phân tích rủi ro?", options: ["Xác định rủi ro và đánh giá mức độ ảnh hưởng", "Chỉ lập trình hệ thống", "Chỉ kiểm thử phần mềm", "Chỉ triển khai hệ thống"], answer: "A" }

    ],

    2: [
        
            { q: "Thực thể (Entity) là gì?", options: ["Đặc điểm mô tả đối tượng", "Đối tượng cần quản lý trong hệ thống", "Thuộc tính dùng để phân biệt các đối tượng", "Mối quan hệ giữa các đối tượng"], answer: "B" },

            { q: "Thuộc tính (Attribute) là gì?", options: ["Đối tượng cần quản lý trong hệ thống", "Mối quan hệ giữa các thực thể", "Đặc điểm mô tả thực thể", "Tập hợp các khóa"], answer: "C" },

            { q: "Khóa (Key) là gì?", options: ["Thuộc tính dùng để phân biệt các thực thể với nhau", "Thuộc tính mô tả thực thể", "Mối quan hệ giữa các thực thể", "Tập hợp các bảng dữ liệu"], answer: "A" },

            { q: "ERD là viết tắt của cụm từ nào?", options: ["Entity Relationship Diagram", "Entity Record Database", "Electronic Resource Data", "Enterprise Resource Diagram"], answer: "A" },

            { q: "ERD giúp mô tả thành phần nào?", options: ["Thực thể, thuộc tính và mối quan hệ", "Chương trình và thuật toán", "Mạng máy tính và thiết bị", "Hệ điều hành và phần cứng"], answer: "A" },

            { q: "ERD được sử dụng chủ yếu làm cơ sở để:", options: ["Thiết kế giao diện", "Thiết kế cơ sở dữ liệu", "Viết chương trình", "Thiết kế mạng"], answer: "B" },

            { q: "Khi chuyển ERD sang RDM, mỗi thực thể được chuyển thành:", options: ["Một thuộc tính", "Một khóa ngoại", "Một bảng", "Một quan hệ"], answer: "C" },

            { q: "Khi chuyển ERD sang RDM, thuộc tính được chuyển thành:", options: ["Bảng", "Cột", "Khóa ngoại", "Chỉ mục"], answer: "B" },

            { q: "Trong RDM cần xác định loại khóa nào cho mỗi bảng?", options: ["Khóa phụ", "Khóa chính", "Khóa ứng viên", "Khóa thay thế"], answer: "B" },

            { q: "Các mối quan hệ giữa các bảng thường được biểu diễn bằng:", options: ["Thuộc tính dẫn xuất", "Khóa ngoại", "Khóa chính", "Chỉ mục"], answer: "B" },

            { q: "Một lưu ý quan trọng khi chuyển ERD sang RDM là:", options: ["Tăng số lượng bảng càng nhiều càng tốt", "Tạo nhiều khóa chính trong một bảng", "Tránh dư thừa dữ liệu", "Bỏ qua ràng buộc dữ liệu"], answer: "C" },

            { q: "Trong sơ đồ ERD, mối quan hệ giữa các thực thể được biểu diễn bằng:", options: ["Hình chữ nhật", "Đường nối giữa các thực thể", "Hình elip", "Khóa chính"], answer: "B" },

            { q: "Mối quan hệ trong ERD dùng để thể hiện:", options: ["Kiểu dữ liệu của thuộc tính", "Số lượng bản ghi trong bảng", "Sự liên kết giữa các thực thể", "Dung lượng lưu trữ dữ liệu"], answer: "C" },

            { q: "Trong ví dụ 'Sinh viên – Đăng ký – Môn học', 'Đăng ký' là:", options: ["Thuộc tính", "Khóa chính", "Mối quan hệ", "Thực thể yếu"], answer: "C" },

            { q: "Tổng quát hóa (Generalization) là:", options: ["Chia một thực thể thành nhiều thực thể nhỏ hơn", "Gộp nhiều thực thể có đặc điểm chung thành một thực thể tổng quát", "Chuyển ERD thành RDM", "Loại bỏ thuộc tính dư thừa"], answer: "B" },

            { q: "Chuyên biệt hóa (Specialization) là:", options: ["Chia một thực thể tổng quát thành các thực thể cụ thể hơn", "Gộp nhiều thực thể thành một", "Tạo khóa chính cho bảng", "Tạo khóa ngoại"], answer: "A" },

            { q: "Mục đích của tổng quát hóa và chuyên biệt hóa là:", options: ["Tăng số lượng bảng dữ liệu", "Giảm trùng lặp dữ liệu và tổ chức dữ liệu hợp lý hơn", "Tăng dung lượng lưu trữ", "Loại bỏ khóa chính"], answer: "B" },

            { q: "Ưu điểm của mô hình dữ liệu quan hệ là:", options: ["Dễ thiết kế và quản lý", "Khó sử dụng", "Không cần chuẩn hóa", "Không cần khóa chính"], answer: "A" },

            { q: "Mô hình dữ liệu quan hệ giúp:", options: ["Tăng dữ liệu dư thừa", "Hạn chế trùng lặp dữ liệu", "Loại bỏ hoàn toàn dữ liệu", "Tăng số lượng khóa ngoại"], answer: "B" },

            { q: "Nhược điểm của RDM là:", options: ["Không hỗ trợ dữ liệu dạng bảng", "Xử lý dữ liệu phức tạp có thể chậm", "Không có khóa chính", "Không lưu được dữ liệu"], answer: "B" },

            { q: "RDM gặp khó khăn khi biểu diễn:", options: ["Dữ liệu có cấu trúc", "Dữ liệu dạng bảng", "Dữ liệu đa phương tiện hoặc phi cấu trúc", "Dữ liệu số"], answer: "C" },

            { q: "Ràng buộc toàn vẹn (Integrity Constraints) là:", options: ["Các quy tắc đảm bảo dữ liệu chính xác và nhất quán", "Các quy tắc thiết kế giao diện", "Các quy tắc lập trình", "Các quy tắc quản lý mạng"], answer: "A" },

            { q: "Vai trò của ràng buộc toàn vẹn là:", options: ["Làm tăng lỗi dữ liệu", "Ngăn ngừa sai sót dữ liệu", "Giảm dung lượng bộ nhớ", "Tăng số lượng bảng"], answer: "B" },

            { q: "Ràng buộc toàn vẹn giúp đảm bảo:", options: ["Tính thẩm mỹ của giao diện", "Tốc độ mạng", "Độ tin cậy của cơ sở dữ liệu", "Dung lượng lưu trữ"], answer: "C" },

            { q: "Quan hệ 1–1 là:", options: ["Một thực thể liên kết với một thực thể khác", "Một thực thể liên kết với nhiều thực thể khác", "Nhiều thực thể liên kết với nhiều thực thể khác", "Không có liên kết"], answer: "A" },

            { q: "Ví dụ nào là quan hệ 1–1?", options: ["Lớp – Sinh viên", "Sinh viên – Môn học", "Người – CMND", "Khoa – Giảng viên"], answer: "C" },

            { q: "Quan hệ 1–n là:", options: ["Một thực thể liên kết với một thực thể khác", "Một thực thể liên kết với nhiều thực thể khác", "Nhiều thực thể liên kết với nhiều thực thể khác", "Không xác định"], answer: "B" },

            { q: "Ví dụ nào là quan hệ 1–n?", options: ["Người – CMND", "Sinh viên – Môn học", "Lớp – Sinh viên", "Giảng viên – Môn học"], answer: "C" },

            { q: "Quan hệ n–n là:", options: ["Một thực thể liên kết với nhiều thực thể khác", "Một thực thể liên kết với một thực thể khác", "Nhiều thực thể liên kết với nhiều thực thể khác", "Không có liên kết"], answer: "C" },

            { q: "Ví dụ nào là quan hệ n–n?", options: ["Sinh viên – Môn học", "Người – CMND", "Lớp – Sinh viên", "Khoa – Lớp"], answer: "A" },

            { q: "CDM là viết tắt của:", options: ["Conceptual Data Model", "Computer Data Model", "Central Data Model", "Core Data Management"], answer: "A" },

            { q: "CDM mô tả dữ liệu ở mức:", options: ["Vật lý", "Chi tiết lưu trữ", "Tổng quát", "Lập trình"], answer: "C" },

            { q: "PDM là viết tắt của:", options: ["Program Data Model", "Physical Data Model", "Primary Data Model", "Processing Data Model"], answer: "B" },

            { q: "PDM mô tả:", options: ["Nghiệp vụ tổng quát", "Quy trình kinh doanh", "Cách dữ liệu được lưu trữ trong hệ quản trị CSDL", "Thiết kế giao diện"], answer: "C" },

            { q: "Mô hình nào phụ thuộc vào hệ quản trị cơ sở dữ liệu?", options: ["CDM", "PDM", "ERD", "LDM"], answer: "B" },

            { q: "Bước đầu tiên khi xây dựng LDM là:", options: ["Chuẩn hóa dữ liệu", "Xác định thực thể", "Tạo khóa ngoại", "Tạo giao diện"], answer: "B" },

            { q: "Sau khi xác định thực thể, cần xác định:", options: ["Thuộc tính", "Giao diện", "Máy chủ", "Mạng"], answer: "A" },

            { q: "Trong LDM cần xác định:", options: ["Khóa chính", "Màu giao diện", "Hệ điều hành", "Phần cứng"], answer: "A" },

            { q: "Một bước quan trọng trong LDM là:", options: ["Thiết kế mạng", "Xác định các mối quan hệ giữa các thực thể", "Cài đặt phần mềm", "Thiết kế giao diện"], answer: "B" },

            { q: "Bước cuối cùng trong quy trình xây dựng LDM được nêu là:", options: ["Thiết kế giao diện", "Chuẩn hóa dữ liệu", "Cài đặt hệ quản trị CSDL", "Kiểm thử chương trình"], answer: "B" }
     
    ],
    3: [
        
            { q: "Sơ đồ chức năng trong hệ thống thông tin là gì?", options: ["Mô tả cấu trúc dữ liệu của hệ thống", "Mô tả các chức năng và mối quan hệ giữa các chức năng của hệ thống", "Mô tả giao diện người dùng", "Mô tả phần cứng của hệ thống"], answer: "B" },

            { q: "Trong ví dụ hệ thống quản lý sinh viên, chức năng nào sau đây thuộc hệ thống?", options: ["Quản lý sinh viên", "Quản lý môn học", "Quản lý điểm", "Tất cả các đáp án trên"], answer: "D" },

            { q: "DFD là viết tắt của cụm từ nào?", options: ["Data Flow Diagram", "Data File Diagram", "Database Flow Diagram", "Data Function Diagram"], answer: "A" },

            { q: "Ô xử lý (Process) trong DFD có vai trò gì?", options: ["Lưu trữ dữ liệu", "Xử lý dữ liệu", "Trao đổi dữ liệu với bên ngoài", "Mô tả phần cứng"], answer: "B" },

            { q: "Luồng dữ liệu (Data Flow) trong DFD là gì?", options: ["Nơi lưu trữ dữ liệu", "Dòng dữ liệu di chuyển trong hệ thống", "Đối tượng bên ngoài hệ thống", "Tiến trình xử lý dữ liệu"], answer: "B" },

            { q: "Kho dữ liệu (Data Store) trong DFD là gì?", options: ["Nơi xử lý dữ liệu", "Nơi lưu trữ dữ liệu", "Nguồn cung cấp dữ liệu", "Luồng dữ liệu"], answer: "B" },

            { q: "Nguồn/Đích (External Entity) trong DFD là gì?", options: ["Kho dữ liệu", "Tiến trình xử lý", "Tác nhân bên ngoài trao đổi dữ liệu với hệ thống", "Luồng dữ liệu"], answer: "C" },

            { q: "DFD cấp 0 dùng để:", options: ["Mô tả chi tiết từng chức năng", "Mô tả tổng quát toàn bộ hệ thống", "Mô tả cấu trúc dữ liệu", "Mô tả giao diện"], answer: "B" },

            { q: "DFD cấp 1 dùng để:", options: ["Mô tả tổng quát toàn bộ hệ thống", "Phân rã các chức năng chính của cấp 0 thành các chức năng chi tiết hơn", "Mô tả phần cứng", "Mô tả cơ sở dữ liệu"], answer: "B" },

            { q: "Khi phân rã DFD, cấp nào được xây dựng đầu tiên?", options: ["DFD cấp 1", "DFD cấp 2", "DFD cấp 0", "DFD cấp 3"], answer: "C" },

            { q: "Sau khi vẽ DFD cấp 0, bước tiếp theo là:", options: ["Vẽ ERD", "Phân rã thành DFD cấp 1", "Thiết kế giao diện", "Tạo cơ sở dữ liệu"], answer: "B" },

            { q: "DFD cấp 2 được xây dựng khi nào?", options: ["Khi cần phân rã chi tiết hơn từ cấp 1", "Ngay sau cấp 0", "Trước cấp 1", "Khi thiết kế giao diện"], answer: "A" },

            { q: "Lưu ý quan trọng khi phân rã DFD là:", options: ["Dữ liệu vào và ra giữa các cấp phải đảm bảo cân bằng", "Tăng số lượng xử lý càng nhiều càng tốt", "Loại bỏ luồng dữ liệu", "Không cần kho dữ liệu"], answer: "A" },

            { q: "Ô xử lý trong DFD là:", options: ["Nơi xử lý dữ liệu", "Nơi lưu trữ dữ liệu", "Đối tượng bên ngoài", "Luồng dữ liệu"], answer: "A" },

            { q: "Kho dữ liệu trong DFD là:", options: ["Nơi xử lý dữ liệu", "Nơi lưu trữ dữ liệu", "Nguồn dữ liệu bên ngoài", "Tiến trình"], answer: "B" },

            { q: "Luồng dữ liệu trong DFD là:", options: ["Nơi lưu trữ thông tin", "Dòng thông tin di chuyển", "Tác nhân bên ngoài", "Quy trình xử lý"], answer: "B" },

            { q: "Nguồn/Đích trong DFD là:", options: ["Kho dữ liệu", "Tiến trình xử lý", "Đối tượng bên ngoài hệ thống", "Luồng dữ liệu"], answer: "C" },

            { q: "Bước đầu tiên khi vẽ DFD là:", options: ["Xác định nguồn/đích", "Xác định kho dữ liệu", "Xác định luồng dữ liệu", "Vẽ giao diện"], answer: "A" },

            { q: "Sau khi xác định nguồn/đích, cần thực hiện bước nào?", options: ["Xác định các xử lý", "Thiết kế cơ sở dữ liệu", "Vẽ ERD", "Lập trình hệ thống"], answer: "A" },

            { q: "Một bước trong quá trình vẽ DFD là:", options: ["Xác định luồng dữ liệu", "Thiết kế phần cứng", "Thiết kế mạng", "Viết mã nguồn"], answer: "A" },

            { q: "Sau khi xác định luồng dữ liệu, cần xác định:", options: ["Kho dữ liệu", "Giao diện", "Máy chủ", "Hệ điều hành"], answer: "A" },

            { q: "Bước cuối cùng trong quy trình vẽ DFD là:", options: ["Xác định xử lý", "Hoàn thiện sơ đồ", "Tạo cơ sở dữ liệu", "Kiểm thử hệ thống"], answer: "B" },

            { q: "Một quy tắc quan trọng khi vẽ DFD là:", options: ["Luồng dữ liệu phải có tên rõ ràng", "Luồng dữ liệu không cần tên", "Không cần nguồn/đích", "Không cần xử lý"], answer: "A" },

            { q: "Theo quy tắc DFD, không được nối trực tiếp:", options: ["Nguồn với kho dữ liệu", "Nguồn với xử lý", "Xử lý với kho dữ liệu", "Xử lý với xử lý"], answer: "A" },

            { q: "Việc xác định đúng luồng dữ liệu giúp:", options: ["Tăng số lượng bảng dữ liệu", "Hệ thống hoạt động chính xác và tránh sai sót trong thiết kế", "Tăng tốc độ mạng", "Giảm dung lượng lưu trữ"], answer: "B" },

            { q: "Luồng dữ liệu thể hiện điều gì?", options: ["Cách thông tin di chuyển trong hệ thống", "Cấu trúc phần cứng", "Cấu trúc mạng", "Giao diện người dùng"], answer: "A" },

            { q: "LDM là viết tắt của:", options: ["Logical Data Model", "Local Data Model", "Logic Database Management", "Logical Database Mapping"], answer: "A" },

            { q: "LDM mô tả:", options: ["Cấu trúc dữ liệu và quan hệ giữa các dữ liệu", "Chi tiết lưu trữ dữ liệu", "Giao diện hệ thống", "Phần cứng hệ thống"], answer: "A" },

            { q: "LDM có đặc điểm:", options: ["Không phụ thuộc hệ quản trị CSDL", "Phụ thuộc hệ quản trị CSDL", "Mô tả phần cứng", "Mô tả mạng"], answer: "A" },

            { q: "PDM là viết tắt của:", options: ["Physical Data Model", "Primary Data Model", "Process Data Model", "Program Data Model"], answer: "A" },

            { q: "PDM mô tả:", options: ["Cấu trúc dữ liệu tổng quát", "Chi tiết cách lưu trữ dữ liệu trong hệ quản trị CSDL cụ thể", "Giao diện người dùng", "Luồng dữ liệu"], answer: "B" },

            { q: "Mô hình nào phụ thuộc vào hệ quản trị CSDL cụ thể?", options: ["LDM", "PDM", "DFD", "ERD"], answer: "B" }
    ],

    4: [
            { q: "Nguyên tắc nào sau đây là nguyên tắc cơ bản trong thiết kế giao diện người dùng?", options: ["Đơn giản, dễ hiểu", "Phức tạp, nhiều chức năng", "Nhiều màu sắc", "Tập trung vào phần cứng"], answer: "A" },

            { q: "Tính nhất quán trong thiết kế giao diện có nghĩa là:", options: ["Các thành phần được trình bày thống nhất", "Sử dụng nhiều kiểu giao diện khác nhau", "Thay đổi bố cục liên tục", "Tăng số lượng chức năng"], answer: "A" },

            { q: "Một nguyên tắc quan trọng của giao diện người dùng là:", options: ["Khó sử dụng để tăng bảo mật", "Dễ sử dụng", "Nhiều thao tác", "Nhiều cửa sổ"], answer: "B" },

            { q: "Giao diện nên cung cấp điều gì cho người dùng?", options: ["Phản hồi về các thao tác", "Nhiều quảng cáo", "Thông tin không cần thiết", "Hiệu ứng phức tạp"], answer: "A" },

            { q: "Thiết kế giao diện cần hạn chế:", options: ["Lỗi nhập liệu", "Thông tin hiển thị", "Nút chức năng", "Luồng dữ liệu"], answer: "A" },

            { q: "Bước đầu tiên trong quá trình thiết kế giao diện là:", options: ["Xây dựng giao diện", "Kiểm tra giao diện", "Phân tích yêu cầu người dùng", "Triển khai hệ thống"], answer: "C" },

            { q: "Sau khi phân tích yêu cầu người dùng, bước tiếp theo là:", options: ["Thiết kế giao diện sơ bộ", "Kiểm tra hệ thống", "Lưu dữ liệu", "Thiết kế cơ sở dữ liệu"], answer: "A" },

            { q: "Bước nào dùng để tạo ra giao diện thực tế?", options: ["Phân tích yêu cầu", "Thiết kế sơ bộ", "Xây dựng giao diện", "Đánh giá người dùng"], answer: "C" },

            { q: "Bước cuối cùng trong quá trình thiết kế giao diện là:", options: ["Xây dựng giao diện", "Kiểm tra và hoàn thiện", "Thiết kế sơ bộ", "Lập trình dữ liệu"], answer: "B" },

            { q: "TextBox được sử dụng để:", options: ["Chọn một phương án", "Chọn nhiều phương án", "Nhập văn bản", "Chọn từ danh sách"], answer: "C" },

            { q: "RadioButton được sử dụng để:", options: ["Nhập văn bản", "Chọn một trong nhiều lựa chọn", "Chọn nhiều lựa chọn", "Lưu dữ liệu"], answer: "B" },

            { q: "CheckBox được sử dụng để:", options: ["Chọn nhiều lựa chọn", "Chọn một lựa chọn", "Nhập văn bản", "Hiển thị dữ liệu"], answer: "A" },

            { q: "ComboBox được sử dụng để:", options: ["Nhập văn bản dài", "Chọn từ danh sách có sẵn", "Chọn nhiều lựa chọn", "Hiển thị thông báo"], answer: "B" },

            { q: "Tính tiện dụng của giao diện giúp:", options: ["Người dùng thao tác nhanh và giảm sai sót", "Tăng số lượng màn hình", "Tăng kích thước dữ liệu", "Giảm tốc độ xử lý"], answer: "A" },

            { q: "Để đảm bảo tính tiện dụng, giao diện cần:", options: ["Phức tạp và nhiều hiệu ứng", "Đơn giản, rõ ràng, nhất quán", "Nhiều cửa sổ", "Nhiều màu sắc"], answer: "B" },

            { q: "Vai trò chính của màn hình giao diện kết quả là:", options: ["Lưu dữ liệu", "Hiển thị kết quả xử lý cho người dùng", "Nhập dữ liệu", "Phân quyền người dùng"], answer: "B" },

            { q: "Yếu tố cần thiết của giao diện kết quả hiệu quả là:", options: ["Thông tin rõ ràng, chính xác, dễ đọc", "Nhiều hình ảnh động", "Nhiều màu sắc", "Ít thông tin"], answer: "A" },

            { q: "Một quy tắc để thiết kế giao diện trực quan là:", options: ["Bố cục hợp lý", "Bố cục ngẫu nhiên", "Nhiều cửa sổ", "Ẩn chức năng"], answer: "A" },

            { q: "Màu sắc trong giao diện nên:", options: ["Sử dụng tùy ý", "Phù hợp với mục đích sử dụng", "Thay đổi liên tục", "Càng nhiều càng tốt"], answer: "B" },

            { q: "Giao diện cần thống nhất về:", options: ["Cách trình bày", "Kích thước dữ liệu", "Ngôn ngữ lập trình", "Cấu hình máy tính"], answer: "A" },

            { q: "Một giao diện tốt phải:", options: ["Khó tìm chức năng", "Dễ tìm kiếm và thao tác", "Nhiều bước thực hiện", "Nhiều cửa sổ"], answer: "B" },

            { q: "Ưu điểm của RadioButton là:", options: ["Cho phép chọn nhiều phương án", "Đơn giản khi chọn một phương án", "Tiết kiệm không gian", "Hiển thị dữ liệu"], answer: "B" },

            { q: "Nhược điểm của RadioButton là:", options: ["Ít lựa chọn", "Khó sử dụng", "Tốn nhiều bộ nhớ", "Không thể chọn"], answer: "A" },

            { q: "Ưu điểm của CheckBox là:", options: ["Chỉ chọn một phương án", "Linh hoạt, chọn được nhiều phương án", "Tiết kiệm không gian", "Dễ gây nhầm lẫn"], answer: "B" },

            { q: "Nhược điểm của CheckBox là:", options: ["Không chọn được nhiều phương án", "Dễ rối khi có nhiều lựa chọn", "Khó nhập dữ liệu", "Tốn dung lượng lưu trữ"], answer: "B" },

            { q: "Ưu điểm của ComboBox là:", options: ["Cho phép nhập văn bản dài", "Tiết kiệm không gian hiển thị", "Chọn nhiều phương án", "Hiển thị toàn bộ danh sách"], answer: "B" },

            { q: "Nhược điểm của ComboBox là:", options: ["Không lưu được dữ liệu", "Phải mở danh sách để xem các lựa chọn", "Không có danh sách lựa chọn", "Khó hiển thị"], answer: "B" },

            { q: "Mục đích của thiết kế giao diện với tính đúng đắn là:", options: ["Đảm bảo dữ liệu nhập và kết quả hiển thị chính xác", "Tăng số lượng chức năng", "Tăng tốc độ mạng", "Tăng dung lượng lưu trữ"], answer: "A" },

            { q: "Để đảm bảo tính đúng đắn cần:", options: ["Kiểm tra dữ liệu nhập trước khi lưu hoặc xử lý", "Tăng số lượng màn hình", "Ẩn thông tin lỗi", "Giảm kiểm tra dữ liệu"], answer: "A" },

            { q: "Phản hồi ngay lập tức trong giao diện giúp:", options: ["Người dùng biết hệ thống đã nhận và xử lý yêu cầu", "Tăng kích thước dữ liệu", "Tăng số lượng lỗi", "Giảm hiệu suất"], answer: "A" },

            { q: "Ví dụ về phản hồi ngay lập tức là:", options: ["Thông báo 'Lưu dữ liệu thành công'", "Tắt chương trình", "Ẩn dữ liệu", "Xóa giao diện"], answer: "A" },

            { q: "Yếu tố nào giúp đảm bảo hiệu suất công việc của người dùng?", options: ["Dễ sử dụng", "Nhiều màu sắc", "Nhiều hiệu ứng", "Nhiều cửa sổ"], answer: "A" },

            { q: "Một yếu tố cần xem xét khi thiết kế giao diện là:", options: ["Tốc độ thao tác nhanh", "Dung lượng ổ cứng", "Loại CPU", "Hệ điều hành"], answer: "A" },

            { q: "Tính nhất quán trong giao diện giúp:", options: ["Người dùng thao tác dễ dàng hơn", "Tăng độ phức tạp", "Tăng lỗi nhập liệu", "Giảm khả năng sử dụng"], answer: "A" },

            { q: "Độ chính xác trong giao diện nhằm:", options: ["Đảm bảo thông tin và thao tác đúng", "Tăng số lượng dữ liệu", "Tăng tốc độ mạng", "Tăng hiệu ứng"], answer: "A" },

            { q: "Giao diện tốt cần đáp ứng:", options: ["Nhu cầu của người dùng", "Yêu cầu phần cứng", "Kích thước màn hình", "Dung lượng bộ nhớ"], answer: "A" }
    ],
   
};
let current = 0;
let score = 0;
let questions = [];
let userAnswers = [];

// ================== TRỘN MẢNG ==================
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// ================== TRỘN ĐÁP ÁN ==================
function shuffleOptions(q) {
    let correctText = q.options["ABCD".indexOf(q.answer)];

    shuffleArray(q.options);

    let newIndex = q.options.indexOf(correctText);
    q.answer = "ABCD"[newIndex];
}

// ================== LOAD CHƯƠNG ==================
function loadChapter(chapter) {
    const quizDiv = document.getElementById("quiz");
    const resultDiv = document.getElementById("finalResult");

    if (!data || !data[chapter]) {
        quizDiv.innerHTML = `<h3>⚠️ Không có dữ liệu chương ${chapter}</h3>`;
        resultDiv.innerHTML = "";
        return;
    }

    questions = JSON.parse(JSON.stringify(data[chapter]));

    shuffleArray(questions);
    questions.forEach(q => shuffleOptions(q));

    current = 0;
    score = 0;
    userAnswers = [];

    resultDiv.innerHTML = "";
    renderQuiz();
}

// ================== HIỂN THỊ ==================
function renderQuiz() {
    const quizDiv = document.getElementById("quiz");
    quizDiv.innerHTML = "";

    questions.forEach((item, index) => {
        let div = document.createElement("div");
        div.className = "question";
        div.id = "q" + index;

        div.style.display = index === 0 ? "block" : "none";

        let html = `<p><b>${item.q}</b></p>`;

        item.options.forEach((opt, i) => {
            let letter = "ABCD"[i];
            html += `
                <label>
                    <input type="radio" name="q${index}" value="${letter}">
                    ${letter}. ${opt}
                </label><br>
            `;
        });

        html += `<p class="result"></p>`;
        div.innerHTML = html;
        quizDiv.appendChild(div);
    });

    addEvents();
}

// ================== EVENTS ==================
function addEvents() {
    document.querySelectorAll("input[type=radio]").forEach(input => {
        input.addEventListener("change", function () {

            const container = this.closest(".question");
            const qIndex = Number(container.id.replace("q", ""));

            const correct = questions[qIndex].answer;
            questions[qIndex].userAnswer = this.value;

            const result = container.querySelector(".result");

            // khóa input
            // khóa input
            container.querySelectorAll("input").forEach(i => {
                i.disabled = true;

                if (i.value === correct) {
                    i.parentElement.classList.add("correct-answer");
                }
            });

            if (this.value === correct) {
                score++;
                result.innerHTML = "✔ Đúng";
                result.style.color = "green";
            } else {
                this.parentElement.classList.add("wrong-answer");

                result.innerHTML = "❌ Sai (Đáp án: " + correct + ")";
                result.style.color = "red";
            }
         

            let oldBtn = container.querySelector("button");
            if (oldBtn) oldBtn.remove();

            let btn = document.createElement("button");
            btn.innerText = "➡️ Tiếp";

            btn.onclick = () => {
                container.style.display = "none";
                current++;

                if (current < questions.length) {
                    document.getElementById("q" + current).style.display = "block";
                } else {
                    showResult();
                }
            };

            container.appendChild(btn);
        });
    });
}
// ================== KẾT QUẢ ==================
function showResult() {
    const div = document.getElementById("finalResult");

    div.innerHTML = `
        <h3>🎯 Kết quả: ${score}/${questions.length}</h3>
        <button id="reviewBtn">📋 Xem lại bài</button>
    `;

    document.getElementById("reviewBtn").addEventListener("click", reviewAnswers);
}

// ================== XEM LẠI ==================
function reviewAnswers() {
    const quizDiv = document.getElementById("quiz");

    quizDiv.innerHTML = "<h2>📋 Xem lại bài làm</h2>";
    document.getElementById("finalResult").innerHTML = "";

    questions.forEach((item) => {
        const user = item.userAnswer;
        const correct = item.answer;

        let div = document.createElement("div");
        div.className = "question";

        let html = `<p><b>${item.q}</b></p>`;

        item.options.forEach((opt, i) => {
            const letter = "ABCD"[i];

            let color = "";
            if (letter === correct) color = "green";
            else if (letter === user) color = "red";

            html += `<p style="color:${color}">${letter}. ${opt}</p>`;
        });

        html += `<p>👉 Bạn chọn: ${user ?? "Không chọn"}</p>`;
        html += `<p>✔ Đáp án đúng: ${correct}</p><hr>`;

        div.innerHTML = html;
        quizDiv.appendChild(div);
    });
}// ================== AUTO START ==================
window.onload = () => {
    loadChapter(1);
};
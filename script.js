
// ===== DATA =====
const data = {
    1: [

        { q: "Câu 1: Thuật ngữ khoa học Kinh tế chính trị được xuất hiện vào thời gian nào?", options: ["Thế kỷ thứ XV", "Thế kỷ thứ XVI", "Cuối thế kỷ thứ XVII", "Đầu thế kỷ thứ XVII"], answer: "D" },

        { q: "Câu 2: Kinh tế chính trị Mác - Lênin có mấy chức năng cơ bản?", options: ["Năm", "Sáu", "Ba", "Bốn"], answer: "D" },

        { q: "Câu 3: Mục đích nghiên cứu của Kinh tế chính trị Mác – Lênin là gì?", options: ["Chỉ quy về quan hệ sở hữu", "Quá trình sản xuất, phân phối, trao đổi", "Hoạt động kinh tế của con người", "Tìm ra các quy luật kinh tế"], answer: "D" },

        { q: "Câu 4: Trong các phương pháp nghiên cứu, phương pháp nào quan trọng nhất?", options: ["Phân tích và tổng hợp", "Mô hình hóa", "Điều tra thống kê", "Trừu tượng hóa khoa học"], answer: "D" },

        { q: "Câu 5: Kinh tế chính trị Mác – Lênin kế thừa tư tưởng nào?", options: ["Trọng thương", "Trọng nông", "Tầm thường", "Cổ điển Anh"], answer: "D" },

        { q: "Câu 6: Đối tượng nghiên cứu là gì?", options: ["Sản xuất và trao đổi", "Quá trình sản xuất và quan hệ xã hội", "Toàn bộ xã hội", "Quan hệ sản xuất"], answer: "D" },

        { q: "Câu 7: Phương pháp trừu tượng hóa khoa học là gì?", options: ["Bỏ phần phức tạp", "Giữ bản chất", "Đi từ cụ thể", "Cách thức thực hiện nghiên cứu"], answer: "D" },

        { q: "Câu 8: Giải thích hiện tượng kinh tế phải xuất phát từ?", options: ["Hệ tư tưởng", "Hoạt động kinh tế", "Truyền thống", "Ý thức xã hội"], answer: "D" },

        { q: "Câu 9: Chức năng phương pháp luận là gì?", options: ["Nhận diện vai trò", "Giữ bản chất", "Đi từ cụ thể", "Nền tảng khoa học"], answer: "D" },

        { q: "Câu 10: Chức năng tư tưởng là gì?", options: ["Trừu tượng hóa", "Cung cấp phạm trù", "Nền tảng khoa học", "Xây dựng thế giới quan"], answer: "D" },

        { q: "Câu 11: Chức năng thực tiễn là gì?", options: ["Xây dựng thế giới quan", "Cung cấp phạm trù", "Nền tảng khoa học", "Cải tạo thực tiễn"], answer: "D" },

        { q: "Câu 12: Ai đưa ra khái niệm Kinh tế chính trị?", options: ["Th.Mun", "F.Quesnay", "W.Petty", "A.de Montchrestien"], answer: "D" },

        { q: "Câu 13: Cha đẻ kinh tế học cổ điển?", options: ["Montchrestien", "Quesnay", "Malthus", "Petty"], answer: "D" },

        { q: "Câu 14: Nhà kinh tế thời công trường thủ công?", options: ["Petty", "Ricardo", "Serra", "A.Smith"], answer: "D" },

        { q: "Câu 15: Ricardo thuộc thời kỳ nào?", options: ["Tích lũy", "Hiệp tác", "Thủ công", "Đại công nghiệp cơ khí"], answer: "D" },

        { q: "Câu 16: Bản chất khoa học thể hiện ở?", options: ["Thế giới quan", "Niềm tin", "Vũ khí tư tưởng", "Nhận thức tư tưởng thực tiễn và phương pháp luận"], answer: "D" },
        { q: "Câu 17: Có mấy giai đoạn phát triển?", options: ["3 giai đoạn", "4 giai đoạn", "5 giai đoạn", "2 giai đoạn"], answer: "A" },

        { q: "Câu 18: Sản xuất tự cung tự cấp là gì?", options: ["Mua bán", "Mở", "Chu trình", "Là một kiểu tổ chức kinh tế trong ó những sản phẩm ược sản xuất ra nhằm mục ích thỏa mãn nhu cầu tiêu dùng của bản thân người sản xuất "], answer: "D" },

        { q: "Câu 19: Quá trình sản xuất gồm?", options: ["Sức lao động + công cụ", "Lao động + tư liệu", "Sức lao động + đối tượng + tư liệu", "Lao động + đối tượng + tư liệu"], answer: "C" },

        { q: "Câu 20: Trình tự phương thức sản xuất?", options: ["CSNT → PK → Nô lệ → TB → CNCS", "Nô lệ → CSNT → TB → PK → CNCS", "CSNT → Nô lệ → TB → PK → CNCS", "CSNT → Nô lệ → PK → TB → CNCS"], answer: "D" },

        { q: "Câu 21: Hàng hóa là gì?", options: ["Thỏa mãn nhu cầu", "Mua bán", "Trao đổi", "Sản phẩm trao đổi mua bán"], answer: "D" },

        { q: "Câu 22: Sản phẩm mua bán gọi là?", options: ["Trao đổi", "Giá trị", "Thương hiệu", "Hàng hóa"], answer: "D" },

        { q: "Câu 23: Cơ sở trao đổi?", options: ["Công dụng", "Khan hiếm", "Sở thích", "Hao phí lao động kết tinh trong hàng hóa"], answer: "D" },

        { q: "Câu 24: Nguồn gốc giá trị?", options: ["Máy móc", "Đất", "Công nghệ", "Lao động"], answer: "D" },

        { q: "Câu 25: Thực thể giá trị?", options: ["Cụ thể", "Phức tạp", "Giản đơn", "Trừu tượng"], answer: "D" },

        { q: "Câu 26: Giá trị tạo từ?", options: ["Lưu thông", "Cả hai", "Phát minh", "Sản xuất"], answer: "D" },

        { q: "Câu 27: Vật ngang giá chung?", options: ["Kim cương", "USD", "Thẻ", "Tiền"], answer: "D" },

        { q: "Câu 28: Giá trị biểu hiện bằng tiền?", options: ["Giá trị", "Vàng", "USD", "Giá cả"], answer: "D" },

        { q: "Câu 29: Vai trò tiền tệ?", options: ["Bản chất", "Nguồn gốc", "Quy luật", "Chức năng"], answer: "D" },

        { q: "Câu 30: Hàng hóa thỏa mãn qua?", options: ["Quảng cáo", "Sản xuất", "Tiêu dùng", "Trao đổi - mua bán"], answer: "D" },

        { q: "Câu 31: Thừa tiền gọi là?", options: ["Khủng hoảng", "Bội chi", "Mất cân đối", "Lạm phát"], answer: "D" },

        { q: "Câu 32: Kinh tế thị trường có mấy ưu thế?", options: ["6", "7", "5", "3"], answer: "D" },

        { q: "Câu 33: Giá trị cá biệt là gì?", options: ["Cần thiết", "Trao đổi", "Sử dụng", "Cá biệt"], answer: "D" },

        { q: "Câu 34: Phân công lao động xã hội?", options: ["Chia nhỏ", "Trong đơn vị", "Chuyên môn", "Là phân công của xã hội về lao ộng hình thành những ngành, nghề sản xuất khác nhau; là sự chuyên môn hóa nhất ịnh ối với người sản xuất "], answer: "D" }
    ],
    2: [
        { q: "Câu 35: Điều kiện sản xuất hàng hóa?", options: ["Nhu cầu", "Gia đình", "Tư hữu", "Phân công lao ộng xã hội và sự tách biệt về kinh tế giữa các chủ thể sản xuất "], answer: "D" },

        { q: "Câu 36: Giá trị sử dụng là?", options: ["Lao động", "Trao đổi", "Tỉ lệ", "Công dụng của vật phẩm, có thể thỏa mãn nhu cầu nào ó của con người "], answer: "D" },

        { q: "Câu 37: Vì sao có 2 thuộc tính?", options: ["Lao động giản đơn", "Giá cả", "Nhu cầu", "D.Vì lao ộng sản xuất hàng hóa có tính hai mặt: lao ộng cụ thể và lao ộng phức tạp"], answer: "D" },

        { q: "Câu 38: Lao động cụ thể là?", options: ["Quan sát", "Ngành nghề", "Hoạt động", "D.Là những lao ộng ngành nghề cụ thể, có mục ích riêng, ối tượng riêng, thao tác riêng và kết quả riêng "], answer: "D" },

        { q: "Câu 39: Hoạt động chỉ sự ganh đua, đấu tranh giữa các chủ thể kinh tế trong sản xuất kinh doanh nhằm giành những điều kiện thuận lợi để thu được nhiều lợi nhuận được gọi là gì? ", options: ["Độc quyền", "Uy tín", "Mục đích", "Cạnh Tranh"], answer: "D" },

        { q: "Câu 40: Quy luật cạnh tranh chi phối mạnh mẽ nhất trong nền kinh tế nào?", options: ["Kinh tế tự nhiên", "Kinh tế tự cung, tự cấp", "Kinh tế bao cấp", "Kinh tế hàng hóa"], answer: "D" },

        { q: "Câu 41: Trong nền kinh tế hàng hóa, cạnh tranh không nhằm vào yếu tố nào?", options: ["Tạo ưu thế về khoa học và công nghệ", "Tạo thị trường nguyên nhiên vật liệu", "Thu hút nguồn vốn, lao động chất lượng cao", "Tạo thị trường độc quyền"], answer: "D" },

        { q: "Câu 42: Hàng hóa, tiền tệ, người mua, người bán là các nhân tố cơ bản của yếu tố gì?", options: ["Thị trường tự do", "Thị trường dịch vụ", "Thị trường ngoại hối", "Thị trường"], answer: "D" },

        { q: "Câu 43: Nền kinh tế thị trường định hướng XHCN Việt Nam có mấy khuyết tật?", options: ["Chín", "Bảy", "Năm", "Ba"], answer: "D" },

        { q: "Câu 44: Sản phẩm quần áo bán ra thị trường gọi là gì?", options: ["Hàng hóa dịch vụ hữu hình", "Hàng hóa dịch vụ", "Hàng hóa dịch vụ vô hình", "Hàng hóa hữu hình"], answer: "D" },

        { q: "Câu 45: Người mua xe máy đã mua giá trị nào?", options: ["Giá trị", "Giá trị trao đổi", "Giá cả", "Giá trị sử dụng"], answer: "D" },

        { q: "Câu 46: Muốn có lãi thì thời gian lao động cá biệt phải?", options: ["Tương đương", "Cao hơn", "Bằng", "Thấp hơn lao động xã hội cần thiết"], answer: "D" },

        { q: "Câu 47: Căn cứ xác định giá cả?", options: ["Quan hệ cung cầu", "Công dụng", "Tỷ giá", "Thời gian lao động"], answer: "D" },

        { q: "Câu 48: Có lợi cho người mua?", options: ["Cung < cầu", "Cung = cầu", "Cung tương đương", "Cung lớn hơn cầu"], answer: "D" },
        { q: "Câu 49: Mặt trái của cạnh tranh trong nền kinh tế hàng hóa là gì?", options: ["Làm cho khoa học – công nghệ phát triển", "Khai thác tối đa mọi nguồn lực", "Thúc đẩy tăng trưởng kinh tế", "Kích thích chủ thể kinh tế dùng các thủ đoạn để thu lợi nhuận nhiều hơn"], answer: "D" },
        { q: "Thị trường hàng hóa cuối năm 2019 cho biết: Mỹ ang cần 1000 tấn cá Tra ướp khô theo tiêu chuẩn Quốc tế với mức giá 200 USD/1kg. Vậy thời iểm ó, thị trường ang thực hiện chức năng gì?", options: ["Thừa nhận", "Điều tiết sản xuất", "Thông tin", "Kích thích tiêu dùng"], answer: "D" },

        { q: "Tại sao khi cung nhỏ hơn cầu, số lượng người mua giảm xuống?", options: ["Vì nhu cầu người mua giảm", "Vì giá cả hàng hóa giảm", "Vì chất lượng hàng hóa giảm", "Vì giá cả hàng hóa tăng"], answer: "D" },

        { q: "Nếu quy luật Cung – Cầu không còn iều tiết ược quan hệ giữa cung và cầu hàng hóa trên thị trường. Khi cung lớn hơn cầu thì hàng hóa như thế nào?", options: ["Không có giá trị chỉ có giá cả", "Giá cả ngang bằng giá trị", "Giá cả cao hơn giá trị", "Giá cả thấp hơn giá trị"], answer: "D" },

        { q: "Nếu quy luật Cung – Cầu không còn iều tiết ược quan hệ giữa cung và cầu hàng hóa trên thị trường. Khi cung nhỏ hơn cầu thì hàng hóa như thế nào?", options: ["Không có giá cả chỉ có giá trị", "Giá cả ngang bằng giá trị", "Giá cả thấp hơn giá trị", "Giá cả cao hơn giá trị"], answer: "D" },

        { q: "Thế nào là sản xuất hàng hóa?", options: ["Là một kiểu tổ chức kinh tế trong ó những sản phẩm ược sản xuất ra nhằm mục ích thỏa mãn nhu cầu tiêu dùng của bản thân người sản xuất", "Quá trình tái sản xuất chỉ gồm có hai khâu: sản xuất – tiêu dùng", "Kỹ thuật sản xuất ngày càng phát triển; giao lưu kinh tế, văn hóa giữa các vùng, các miền và giao lưu quốc tế ngày càng mở rộng", "Là một kiểu tổ chức kinh tế – xã hội, trong ó những sản phẩm ược sản xuất ra ể trao ổi, mua bán; sản xuất và toàn bộ quá trình tái sản xuất ều gắn với thị trường; kỹ thuật sản xuất ngày càng phát triển; giao lưu kinh tế, văn hóa giữa các vùng, các miền và giao lưu quốc tế ngày càng mở rộng"], answer: "D" },

        { q: "Quan hệ tỷ lệ về lượng trong trao ổi giữa các hàng hóa với nhau do cái gì quy ịnh?", options: ["Do tính hữu ích của hàng hóa", "Do quan hệ cung cầu", "Do ngẫu nhiên", "Do giá trị nội tại của hàng hóa"], answer: "D" },

        { q: "Tính hai mặt của lao ộng sản xuất hàng hóa: lao ộng cụ thể và lao ộng trừu tượng, ai là người ầu tiên phát hiện ra?", options: ["Đ.Ricác ô", "Ph.Ăngghen", "V.I.Lênin", "C.Mác"], answer: "D" },
        { q: "Lượng của giá trị hàng hóa nhiều hay ít, cao hay thấp, ược xác ịnh như thế nào?", options: ["Xác ịnh bằng thời gian lao ộng cá biệt", "Xác ịnh bằng thời gian lao ộng xã hội cần thiết", "Xác ịnh bằng thời gian lao ộng xã hội cần thiết và bằng thời gian lao ộng cá biệt", "Xác ịnh bằng thời gian lao ộng giản ơn trung bình xã hội cần thiết"], answer: "D" },

        { q: "Thế nào là lao ộng giản ơn?", options: ["Lao ộng của những người nông dân, thợ thủ công cá thể", "Lao ộng trong thời kỳ hiệp tác giản ơn", "Lao ộng không òi hỏi có quá trin h2 ào tạo một cách có hệ thống, chuyên sâu về chuyên môn kỹ thuật, kỹ năng, nghiệp vụ cũng có thể thao tác ược", "Lao ộng sử dụng những công cụ lao động giản đơn"], answer: "D" },

        { q: "Điểm giống nhau giữa tăng năng suất lao ộng và tăng cường ộ lao ộng?", options: ["Đều làm giảm giá trị của một ơn vị hàng hóa", "Đều làm tăng lượng lao ộng hao phí trong một ơn vị thời gian", "Đều gắn với tiến bộ kỹ thuật - công nghệ", "Đều làm tăng thêm lượng sản phẩm ược sản xuất ra trong một ơn vị thời gian"], answer: "D" },

        { q: "Câu nói: “Những thời ại kinh tế khác nhau không phải ở chỗ chúng sản xuất ra cái gì, mà là ở chỗ chúng sản xuất bằng cách nào, với những tư liệu lao ộng nào” là của ai?", options: ["A.Smith", "D.Ricardo", "Ph.Ăng ghen", "C.Mác"], answer: "D" },

        { q: "Nội dung cuộc ại phân công lao ộng xã hội lần thứ nhất thuộc lĩnh vực nào?", options: ["Tiểu thủ công nghiệp tách khỏi nông nghiệp", "Công nghiệp tách khỏi nông nghiệp", "Ngành thương nghiệp ra ời", "Trồng trọt tách khỏi chăn nuôi"], answer: "D" },

        { q: "Nội dung cuộc ại phân công lao ộng xã hội lần thứ hai thuộc lĩnh vực nào?", options: ["Đại công nghiệp tách khỏi nông nghiệp", "Trồng trọt tách khỏi chăn nuôi", "Ngành thương nghiệp ra ời", "Thủ công nghiệp tách khỏi nông nghiệp"], answer: "D" },

        { q: "Nội dung cuộc ại phân công lao ộng xã hội lần thứ ba thuộc lĩnh vực nào?", options: ["Trồng trọt tách khỏi chăn nuôi", "Thủ công nghiệp tách khỏi nông nghiệp", "Công nghiệp tách khỏi nông nghiệp", "Ngành thương nghiệp ra ời"], answer: "D" },

        { q: "Cạnh tranh không lành mạnh sẽ dẫn ến hệ quả gì?", options: ["Kích thích sản suất phát triển", "Thúc ẩy ầu tư, nâng cao chất lượng sản phẩm", "Tăng năng xuất lao ộng, cải thiện ời sống nhân dân", "Làm tổn hại môi trường, làm rối loạn thị trường"], answer: "D" },
        { q: "Căn cứ vào âu ể Nhà nước iều tiết ủ lượng tiền Việt Nam ồng trong lưu thông hàng hóa dịch vụ trên thị trường?", options: ["Nhu cầu của người sản xuất và người tiêu dùng", "Số lần chu chuyển của ồng tiền trong lưu thông", "Tổng khối lượng hàng hóa, dịch vụ trong một thời iểm nhất ịnh", "Tổng giá trị hàng hóa trong một thời iểm nhất ịnh"], answer: "D" },

        { q: "Nguyên nhân chủ yếu dẫn ến giá thịt lợn hơi năm 2019 trên thị trường tăng cao?", options: ["Đồng tiền Việt Nam mất giá trong quan hệ hối oái", "Chất lượng lợn thịt nội ịa không ảm bảo", "Chăn nuôi lợn tự phát, dẫn ến vượt quá cầu của thị trường", "Dịch bệnh của lợn bùng phát, dẫn ến cung nhỏ cầu của thị trường"], answer: "D" },

        { q: "Thời gian hao phí ể sản xuất sản phẩm: X = 4 giờ; Y = 5 giờ; Z = 4 giờ; S = 4.6 giờ; Q = 4.8 giờ, trong khi thời gian lao ộng xã hội cần thiết là 4.8 giờ thì sản phẩm nào có thể trao ổi ược với nhau?", options: ["Sản phẩm Y và S", "Sản phẩm Y và Q", "Sản phẩm S và Q", "Sản phẩm X và Z"], answer: "D" },

        { q: "Phương hướng cơ bản và lâu dài ể tăng sản phẩm cho xã hội?", options: ["Tăng cường ộ lao ộng", "Kéo dài thời gian lao ộng", "Mở rộng quy mô sản xuất và nâng cao trình ộ khoa học công nghệ", "Tăng năng suất lao động"], answer: "D" },

        { q: "Tỷ lệ giữa lao ộng phức hợp và lao ộng giản ơn tăng lên có ảnh hưởng như thế nào ến lượng giá trị ược tạo ra trong một ơn vị thời gian?", options: ["Giữ nguyên không thay ổi", "Giảm xuống", "Tăng lên nhưng phải gắn với tiến bộ công nghệ", "Tăng lên"], answer: "D" }

    ],
    3: [
        { q: "Câu 70: Quan hệ lưu thông hàng hóa theo công thức H–T–H, là của nền kinh tế nào?", options: ["Phân phối đa cấp", "Bao cấp – quan liêu", "Hàng hóa thị trường Tư bản", "Hàng hóa giản đơn"], answer: "D" },
        { q: "Câu 71: Quan hệ lưu thông hàng hóa theo công thức T–H–T’, là của nền kinh tế nào?", options: ["Kế hoạch hóa XHCN", "Bao cấp – quan liêu", "Hàng hóa giản đơn", "Hàng hóa thị trường Tư bản"], answer: "D" },
        { q: "Câu 72: Học thuyết kinh tế nào của C.Mác được coi là hòn đá tảng?", options: ["Học thuyết giá trị lao động", "Học thuyết tích lũy tư sản", "Học thuyết tái sản xuất tư bản", "Học thuyết giá trị thặng dư"], answer: "D" },
        { q: "Câu 73: Chọn phương án đúng nhất chỉ công thức chung của tư bản?", options: ["H – T – H’", "T – SX – T’", "H – T – H’", "T – H – T’"], answer: "D" },
        { q: "Câu 74: Hàng hóa sức lao động mang yếu tố gì?", options: ["Tinh thần và vật chất", "Vật chất và lịch sử", "Tinh thần và tự do", "Tinh thần và lịch sử"], answer: "D" },
        { q: "Câu 75: Nhận định nào sau đây là đúng nhất khi nói về hàng hóa sức lao động?", options: ["Lao động trong lĩnh vực mua bán hàng hóa", "Như là một tiểu thương bỏ sức lao động để buôn bán hàng hóa", "Là sự đổi công lao động qua lại trong nền kinh tế hàng hóa tiền tệ", "Giá trị sử dụng của nó có khả năng tạo ra giá trị mới"], answer: "D" },
        { q: "Câu 76: Giá trị thặng dư là gì?", options: ["Là phần lao động được trả công của công nhân", "Là toàn bộ phần lao động của công nhân", "Là lao động sáng tạo của công nhân", "Là phần lao động không công của công nhân"], answer: "D" },
        { q: "Câu 77: Tỷ suất giá trị thặng dư (m’) là gì?", options: ["Tỷ lệ phần trăm giữa lượng giá trị thặng dư và lượng tư bản bất biến", "Tỷ lệ phần trăm giữa lượng tư bản bất biến và lượng tư bản khả biến", "Tỷ lệ phần trăm giữa lượng giá trị thặng dư và lượng tư bản khả biến", "Tỷ lệ phần trăm giữa lượng sản phẩm và lượng tư bản khả biến"], answer: "D" },
        { q: "Câu 78: Khối lượng giá trị thặng dư (M) được tính bằng công thức nào?", options: ["M = m’. K", "M = m’. C", "M = m . V", "M = m’. V"], answer: "D" },
        { q: "Câu 79: Bản chất của tiền công trong chủ nghĩa tư bản là gì?", options: ["Giá cả của hàng hóa lao động", "Giá cả của lao động", "Giá cả của hàng hóa", "Giá cả của hàng hóa sức lao động"], answer: "D" },
        { q: "Câu 80: Hai hình thức tiền công cơ bản trong chủ nghĩa tư bản là gì?", options: ["Tiền công theo thời gian và tiền công theo định mức lao động", "Tiền công theo giờ và tiền công theo kỹ năng lao động", "Tiền công theo tháng và tiền công theo năng suất lao động", "Tiền công theo thời gian và tiền công theo sản phẩm"], answer: "D" },

        { q: "Câu 81: Hình thức nào không phải biểu hiện của giá trị thặng dư?", options: ["Lợi nhuận", "Lợi tức", "Địa tô", "Tiền lương"], answer: "D" },
        { q: "Câu 82: Giá trị sức lao động được đo lường gián tiếp bằng giá trị nào?", options: ["Giá trị những tư liệu sản xuất để nuôi sống nguồn lao động", "Giá trị sử dụng những tư liệu tiêu dùng để nuôi sống người lao động", "Giá trị những tư liệu tiêu dùng để nuôi sống nhà tư bản", "Giá trị những tư liệu tiêu dùng để nuôi sống người lao động"], answer: "D" },
        { q: "Câu 83: Giá trị sử dụng của hàng hóa sức lao động khi sử dụng sẽ có giá trị như thế nào?", options: ["Giá trị mới bằng giá trị bản thân của nó", "Giá trị mới nhỏ hơn giá trị bản thân của nó", "Giá trị sử dụng mới lớn hơn giá trị sử dụng bản thân của nó", "Giá trị mới lớn hơn giá trị bản thân của nó"], answer: "D" },
        { q: "Câu 84: Nguồn gốc của tập trung tư bản là gì?", options: ["Các tư bản công nghiệp trong xã hội", "Tư bản cá biệt của các nước", "Các tư bản thương nghiệp và công nghiệp trong xã hội", "Các tư bản cá biệt có sẵn trong xã hội"], answer: "D" },
        { q: "Câu 85: Giá trị hàng hóa được viết bằng công thức nào?", options: ["G = k - p", "G = k + m", "k = c + v", "G = k + p"], answer: "D" },
        { q: "Câu 86: Để có giá trị thặng dư tuyệt đối, trong quá trình sản xuất nhà tư bản làm gì?", options: ["Kéo dài ngày lao động hoặc tăng năng suất lao động", "Rút ngắn ngày lao động hoặc tăng cường độ lao động", "Kéo dài ngày lao động hoặc tăng thời gian lao động", "Kéo dài ngày lao động hoặc tăng cường độ lao động"], answer: "D" },
        { q: "Câu 87: Để có giá trị thặng dư tương đối, trong quá trình sản xuất nhà tư bản làm gì?", options: ["Tăng sản lượng, làm rút ngắn thời gian lao động cần thiết", "Tăng cường độ lao động, làm rút ngắn thời gian lao động cần thiết", "Tăng năng suất lao động, làm rút ngắn thời gian lao động cá biệt", "Tăng năng suất lao động, làm rút ngắn thời gian lao động cần thiết"], answer: "D" },
        { q: "Câu 88: Điều kiện biến sức lao động thành hàng hóa sức lao động là gì?", options: ["Người lao động phải được tự do; người lao động không có tư liệu tiêu dùng", "Người lao động không được tự do; người lao động không có tư liệu sản xuất", "Người lao động phải được tự do; người lao động có tư liệu sản xuất", "Người lao động phải được tự do; người lao động không có tư liệu sản xuất"], answer: "D" },
        { q: "Câu 89: Theo quan điểm của C.Mác, giá trị sử dụng của hàng hóa sức lao động được coi là gì?", options: ["Chìa khóa để giải quyết mâu thuẫn giữa tư bản và tư bản", "Chìa khóa để giải quyết mâu thuẫn giữa tư bản và lao động", "Chìa khóa để giải quyết mâu thuẫn của lưu thông hàng hóa", "Chìa khóa để giải quyết mâu thuẫn công thức chung của tư bản"], answer: "D" },
        { q: "Câu 90: Công thức chung của tư bản phản ánh điều gì?", options: ["Mục đích của sản xuất, lưu thông là giá trị và giá trị thặng dư", "Phương tiện của lưu thông tư bản là giá trị và giá trị thặng dư", "Mục đích của sản xuất, lưu thông tư bản là giá trị sử dụng và giá trị thặng dư", "Mục đích của sản xuất, lưu thông tư bản là giá trị và giá trị thặng dư"], answer: "D" },

        { q: "Câu 91: Chọn phương án đúng nhất, chỉ sức lao động?", options: ["Toàn bộ sức thể lực tồn tại trong mỗi con người", "Toàn bộ sức trí lực tồn tại trong mỗi con người", "Toàn bộ sức thể lực và trí lực tồn tại không có khả năng đem ra sử dụng", "Toàn bộ những năng lực thể chất và tinh thần tồn tại trong cơ thể, trong một con người đang sống, và được người đó đem ra vận dụng mỗi khi sản xuất ra một giá trị sử dụng nào đó"], answer: "D" },
        { q: "Câu 92: Tư bản bất biến (c) được hiểu như thế nào?", options: ["Là giá trị tư liệu sản xuất, giá trị của nó được tăng lên sau quá trình sản xuất", "Là giá trị tư liệu sản xuất, giá trị của nó giảm đi sau quá trình sản xuất", "Là giá trị tư liệu sản xuất, giá trị sử dụng của nó được bảo tồn và chuyển vào sản phẩm", "Là giá trị tư liệu sản xuất, giá trị của nó không thay đổi sau quá trình sản xuất"], answer: "D" },
        { q: "Câu 93: Tư bản khả biến (v) được hiểu như thế nào?", options: ["Là giá trị tư liệu sản xuất, giá trị của nó được tăng lên sau quá trình sản xuất", "Là giá trị sức lao động, giá trị của nó giảm đi sau quá trình sản xuất", "Là giá trị sức lao động, giá trị của nó không tăng lên sau quá trình sản xuất", "Là giá trị sức lao động, giá trị của nó được tăng lên sau quá trình sản xuất"], answer: "D" },
        { q: "Câu 94: Để cho tiền biến thành tư bản phải có điều kiện gì?", options: ["Phải tích lũy được một lượng tiền lớn; tiền không đưa vào kinh doanh với mục đích thu giá trị thặng dư", "Phải tích trữ được một lượng hàng hóa lớn; hàng hóa được đem ra mua – bán với mục đích thu giá trị thặng dư", "Phải tích lũy được một lượng máy móc lớn; máy móc phải được đưa vào kinh doanh tư bản với mục đích thu giá trị thặng dư", "Phải tích lũy được một lượng tiền lớn; tiền phải được đưa vào kinh doanh tư bản với mục đích thu giá trị thặng dư"], answer: "D" },
        { q: "Câu 95: Nguồn gốc chủ yếu của tích lũy tư bản là gì?", options: ["Lợi nhuận bình quân", "Giá trị lao động", "Giá trị trao đổi", "Giá trị thặng dư"], answer: "D" },
        { q: "Câu 96: Tích tụ tư bản là gì?", options: ["Quá trình tăng giảm quy mô của tư bản cá biệt bằng cách tư bản hóa một phần giá trị thặng dư", "Quá trình tăng quy mô của tư bản xã hội bằng cách tư bản hóa một phần giá trị thặng dư", "Quá trình giảm quy mô của tư bản xã hội bằng cách tư bản hóa một phần giá trị thặng dư", "Quá trình tăng quy mô của tư bản cá biệt bằng cách tư bản hóa một phần giá trị thặng dư"], answer: "D" },
        { q: "Câu 97: Tập trung tư bản là gì?", options: ["Quá trình liên kết, hợp nhất các tư bản xã hội trong xã hội thành một tư bản lớn hơn", "Quá trình liên kết, hợp nhất các tư bản tiền tệ trong xã hội thành một tư bản lớn hơn", "Quá trình liên kết, hợp nhất các tư bản thương nghiệp trong xã hội thành một tư bản lớn hơn", "Quá trình liên kết, hợp nhất các tư bản cá biệt trong xã hội thành một tư bản lớn hơn"], answer: "D" },
        { q: "Câu 98: Tuần hoàn của tư bản công nghiệp là sự thống nhất của ba hình thái tuần hoàn nào?", options: ["Tư bản lưu thông; tư bản sản xuất và tư bản hàng hóa", "Tư bản tiền tệ; tư bản sản xuất và tư bản cho vay", "Tư bản tiền tệ; tư bản trao đổi và tư bản hàng hóa", "Tư bản tiền tệ; tư bản sản xuất và tư bản hàng hóa"], answer: "D" },
        { q: "Câu 99: Tỷ suất lợi nhuận (p’) là gì?", options: ["Tỷ lệ phần trăm giữa tổng giá trị thặng dư và toàn bộ tư bản khả biến", "Tỷ lệ phần trăm giữa tổng giá trị thặng dư và toàn bộ tư bản bất biến", "Tỷ lệ phần trăm giữa tổng giá trị và toàn bộ tư bản ứng trước", "Tỷ lệ phần trăm giữa tổng giá trị thặng dư và toàn bộ tư bản ứng trước"], answer: "D" },
        { q: "Câu 100: Lợi nhuận bình quân là gì?", options: ["Lợi nhuận không bằng nhau của những lượng vốn tư bản đầu tư bằng nhau khi đầu tư vào các ngành khác nhau", "Lợi nhuận bằng nhau của những lượng vốn tư bản đầu tư không bằng nhau khi đầu tư vào các ngành khác nhau", "Lợi nhuận khác nhau của những lượng vốn tư bản đầu tư khác nhau khi đầu tư vào các ngành khác nhau", "Lợi nhuận bằng nhau của những lượng vốn tư bản đầu tư bằng nhau khi đầu tư vào các ngành khác nhau"], answer: "D" },

        { q: "Câu 101: Địa tô tư bản là gì?", options: ["Phần lợi nhuận ngoài lợi nhuận bình quân nhà tư bản kinh doanh nông nghiệp phải nộp cho chủ đất", "Phần tỷ suất giá trị thặng dư ngoài lợi nhuận bình quân mà nhà tư bản kinh doanh nông nghiệp phải nộp cho chủ đất", "Phần giá trị thặng dư ngoài lợi nhuận mà nhà tư bản kinh doanh nông nghiệp phải nộp cho chủ đất", "Phần giá trị thặng dư ngoài lợi nhuận bình quân mà nhà tư bản kinh doanh nông nghiệp phải nộp cho chủ đất"], answer: "D" },
        { q: "Câu 102: Địa tô tư bản chủ nghĩa có các hình thức cơ bản nào?", options: ["Địa tô chênh lệch I; địa tô chênh lệch II", "Địa tô tuyệt đối; địa tô độc quyền", "Địa tô chênh lệch; địa tô tuyệt đối", "Địa tô chênh lệch; địa tô độc quyền"], answer: "D" },
        { q: "Câu 103: Khủng hoảng kinh tế trong chủ nghĩa tư bản theo chu kỳ nào?", options: ["Khủng hoảng – suy giảm – phục hồi – hưng thịnh", "Khủng hoảng – tiêu điều – suy giảm – hưng thịnh", "Suy giảm – tiêu điều – phục hồi – hưng thịnh", "Khủng hoảng – tiêu điều – phục hồi – hưng thịnh"], answer: "D" },
        { q: "Câu 104: Theo C.Mác, địa tô chênh lệch I là gì?", options: ["Là địa tô thu được trên những loại ruộng đất có điều kiện tự nhiên không thuận lợi", "Là địa tô thu được trên những loại ruộng đất có vị trí thuận lợi", "Là địa tô thu được trên những loại ruộng đất do thâm canh làm tăng năng suất", "Là địa tô thu được trên những loại ruộng đất có điều kiện tự nhiên thuận lợi"], answer: "D" },
        { q: "Câu 105: Theo C.Mác, địa tô chênh lệch II là gì?", options: ["Là địa tô có được do chuyên canh, tăng năng suất", "Là địa tô có được do thâm canh, giảm năng suất", "Là địa tô có được do độc canh, tăng năng suất", "Là địa tô có được do thâm canh, tăng năng suất"], answer: "D" },
        { q: "Câu 106: Theo C.Mác, địa tô tuyệt đối là gì?", options: ["Nhà tư bản đi thuê đất phải trả cho chủ đất khi thuê mướn ruộng đất tốt", "Nhà tư bản đi thuê đất không phải trả cho chủ đất dù thuê mướn bất kỳ loại ruộng đất nào", "Nhà tư bản đi thuê đất phải trả cho chủ đất khi thuê mướn ruộng đất xấu", "Nhà tư bản đi thuê đất phải trả cho chủ đất dù thuê mướn bất kỳ loại ruộng đất nào"], answer: "D" },
        { q: "Câu 107: Điểm giống nhau giữa địa tô chênh lệch và địa tô tuyệt đối là gì?", options: ["Tư bản bất biến", "Có nguồn gốc từ giá trị trao đổi", "Có nguồn gốc từ giá trị", "Có nguồn gốc từ giá trị thặng dư"], answer: "D" },
        { q: "Câu 108: Hao mòn hữu hình là gì?", options: ["Là hao mòn vật chất do quá trình sử dụng hoặc do tác động của con người", "Là hao mòn phi vật chất do quá trình sử dụng hoặc do tác động của con người", "Là hao mòn vô hình do quá trình sử dụng hoặc do tác động của tự nhiên", "Là hao mòn vật chất do quá trình sử dụng hoặc do tác động của tự nhiên"], answer: "D" },
        { q: "Câu 109: Ngày lao động của công nhân gồm hai phần nào?", options: ["Thời gian lao động giản đơn và thời gian lao động thặng dư", "Thời gian lao động phức tạp và thời gian lao động thặng dư", "Thời gian lao động giản đơn và thời gian lao động phức tạp", "Thời gian lao động cần thiết và thời gian lao động thặng dư"], answer: "D" },
        { q: "Câu 110: Căn cứ vào đâu để phân chia tư bản bất biến và tư bản khả biến?", options: ["Căn cứ vào vai trò của các bộ phận này trong quá trình sản xuất ra giá trị", "Căn cứ vào vai trò của các bộ phận này trong quá trình sản xuất ra giá trị sử dụng", "Căn cứ vào vai trò của các bộ phận này trong quá trình sản xuất ra sản phẩm", "Căn cứ vào vai trò của các bộ phận này trong quá trình sản xuất ra giá trị thặng dư"], answer: "D" },
        { q: "Câu 111: Quy luật kinh tế cơ bản của chủ nghĩa tư bản là gì?", options: ["Quy luật giá trị", "Quy luật giá trị cạnh tranh", "Quy luật giá trị lợi nhuận bình quân", "Quy luật giá trị thặng dư"], answer: "D" },
        { q: "Câu 112: Việc mua bán sức lao động và mua bán nô lệ khác nhau chỗ nào?", options: ["Bán sức lao động là bán sức khỏe, bán nô lệ là bán sức lực", "Bán nô lệ là bán con người, bán sức lao động là người đem bán", "Mua sức lao động và mua nô lệ không khác nhau đều nhằm mục đích chiếm sức lao động", "Bán sức lao động do chủ thể bán, bán nô lệ do khách thể bán"], answer: "D" },
        { q: "Câu 113: Cấu tạo hữu cơ của tư bản là gì?", options: ["Cấu tạo sản xuất của tư bản, đồng thời phản ánh sự biến đổi của cấu tạo kỹ thuật", "Cấu tạo giá trị sử dụng của tư bản, đồng thời phản ánh sự biến đổi của cấu tạo kỹ thuật", "Cấu tạo giá trị thặng dư của tư bản, đồng thời phản ánh sự biến đổi của cấu tạo kỹ thuật", "Cấu tạo giá trị của tư bản, đồng thời phản ánh sự biến đổi của cấu tạo kỹ thuật"], answer: "D" },
        { q: "Câu 114: Cấu tạo hữu cơ của tư bản (c/v) phản ánh mối quan hệ gì?", options: ["Tỷ lệ giữa số lượng tư liệu tiêu dùng và số lượng sức lao động", "Tỷ lệ giữa số lượng tư liệu sản xuất và chất lượng lao động", "Tỷ lệ giữa số lượng tư liệu tiêu dùng và chất lượng lao động", "Tỷ lệ giữa số lượng tư liệu sản xuất và số lượng sức lao động"], answer: "D" },
        { q: "Câu 115: Tư bản cố định là bộ phận tư bản sẽ như thế nào khi tham gia vào quá trình sản xuất?", options: ["Giá trị của nó được chuyển ngay một lần vào sản phẩm mới", "Giá trị sử dụng của nó được chuyển dần vào sản phẩm mới", "Giá trị trao đổi của nó được chuyển dần vào sản phẩm mới", "Giá trị của nó được chuyển dần vào sản phẩm mới"], answer: "D" },
        { q: "Câu 116: Hao mòn tư bản cố định thể hiện ở hai mặt nào?", options: ["Hao mòn tự nhiên và hao mòn vô hình", "Hao mòn hữu hình và hao mòn vật chất", "Hao mòn hữu hình và sự lỗi thời máy móc", "Hao mòn hữu hình và hao mòn vô hình"], answer: "D" },
        { q: "Câu 117: Tốc độ chu chuyển của tư bản được đo bằng yếu tố gì?", options: ["Số vòng chu chuyển của tư bản trong một năm", "Số vòng chu chuyển của tư bản trong ba năm", "Số vòng chu chuyển của tư bản trong năm năm", "Số vòng chu chuyển của tư bản trong hai năm"], answer: "D" },
        { q: "Câu 118: Tỷ suất lợi nhuận được tính theo công thức nào?", options: ["M = m’. K", "M = m’. V", "M’ = m/v x 100%", "p’ = p/(c+v) x 100%"], answer: "D" },
        { q: "Câu 119: Tỷ suất giá trị thặng dư được tính theo công thức nào?", options: ["M = m’. K", "M = m’. C", "M = m’. V", "M’ = m/v x 100%"], answer: "D" },
        { q: "Câu 120: Trả tiền lương tính theo sản phẩm được căn cứ vào đâu?", options: ["Tiền lương căn cứ vào số lượng sản phẩm", "Tiền lương căn cứ vào chất lượng sản phẩm", "Tiền lương căn cứ vào sản phẩm", "Tiền lương căn cứ vào số lượng và chất lượng sản phẩm"], answer: "D" },
        { q: "Câu 121: C.Mác nêu ra mấy nhân tố ảnh hưởng tới tỷ suất lợi nhuận?", options: ["Ba", "Năm", "Sáu", "Bốn"], answer: "D" }
    ],
    4: [
        { q: "Câu 122: Cạnh tranh giữa các ngành sẽ dẫn đến kết quả gì?", options: ["Hình thành giá cả sản xuất", "Hình thành giá trị thị trường", "Hình thành chi phí sản xuất", "Hình thành lợi nhuận bình quân"], answer: "D" },

        { q: "Câu 123: Phương thức sản xuất tư bản chủ nghĩa được thiết lập và phát triển qua các giai đoạn nào?", options: ["Chỉ có giai đoạn chủ nghĩa tư bản độc quyền", "Chỉ có giai đoạn chủ nghĩa tư bản tự do cạnh tranh", "Chủ nghĩa tư bản nguyên thủy và chủ nghĩa tư bản hiện đại", "Chủ nghĩa tư bản tự do cạnh tranh và chủ nghĩa tư bản độc quyền"], answer: "D" },

        { q: "Câu 124: Đến cuối thế kỷ XIX, đầu thế kỷ XX, các nước đế quốc (sắp xếp theo thứ tự) có thuộc địa nhiều nhất là những nước nào?", options: ["Nga – Anh – Pháp – Mỹ", "Anh – Pháp – Nga – Mỹ", "Nga – Mỹ – Anh – Pháp", "Anh – Nga – Pháp – Mỹ"], answer: "D" },

        { q: "Câu 125: Có bao nhiêu nguyên nhân xuất hiện độc quyền trong nền kinh tế thị trường?", options: ["Năm", "Ba", "Cốn", "Sáu"], answer: "D" },

        { q: "Câu 126: Chủ nghĩa tư bản độc quyền xuất hiện vào thời gian nào?", options: ["Thế kỷ XVI – XVII", "Thế kỷ XVIII – XIX", "Giữa thế kỷ XX", "Cuối thế kỷ XIX – đầu thế kỷ XX"], answer: "D" },

        { q: "Câu 127: Chủ nghĩa tư bản độc quyền là gì?", options: ["Một phương thức sản xuất", "Một hình thái kinh tế – xã hội", "Thời kỳ quá độ lên chủ nghĩa xã hội", "Giai đoạn phát triển của phương thức sản xuất tư bản chủ nghĩa"], answer: "D" },

        { q: "Câu 128: Hãy cho biết sự chênh lệch giàu - nghèo mà chủ nghĩa tư bản tạo ra giữa các nước giàu và các nước nghèo trên thế giới hiện nay là bao nhiêu lần?", options: ["247", "248", "249", "250"], answer: "D" },

        { q: "Câu 129: Có bao nhiêu loại cạnh tranh giữa các tổ chức độc quyền?", options: ["Năm", "Hai", "Bốn", "Ba"], answer: "D" },

        { q: "Câu 130: Giá cả độc quyền là gì?", options: ["Tìm kiếm lợi nhuận thu được cao hơn lợi nhuận bình quân", "Tìm kiếm lợi nhuận bình quân", "Tìm kiếm giá trị siêu ngạch", "Giá cả do các tổ chức độc quyền áp đặt trong mua và bán hàng hóa"], answer: "D" },

        { q: "Câu 131: Có bao nhiêu đặc điểm của độc quyền trong chủ nghĩa tư bản?", options: ["Bốn", "Ba", "Sáu", "Năm"], answer: "D" },

        { q: "Câu 132: Ngày nay, xuất khẩu tư bản có mấy biểu hiện mới?", options: ["Năm biểu hiện mới", "Ba biểu hiện mới", "Sáu biểu hiện mới", "Bốn biểu hiện mới"], answer: "D" },

        { q: "Câu 133: Sự hình thành các tổ chức độc quyền tư bản dựa trên cơ sở nào?", options: ["Sản xuất nhỏ phân tán", "Phát triển khoa học – kỹ thuật", "Sự hoàn thiện quan hệ sản xuất tư bản chủ nghĩa", "Tích tụ tập trung sản xuất và sự xuất hiện các xí nghiệp quy mô lớn"], answer: "D" },

        { q: "Câu 134: Do có địa vị độc quyền, trong hoạt động trao đổi mua bán, các tổ chức độc quyền đã làm gì?", options: ["Giá cả độc quyền thấp khi mua và bán đúng giá trị", "Mua đúng giá trị và bán với giá cả độc quyền cao", "Giá cả sản xuất cao", "Giá cả độc quyền thấp khi mua, cao khi bán"], answer: "D" },

        { q: "Câu 135: Trong các nhà kinh điển của chủ nghĩa Mác – Lênin, ai là người khái quát về nguyên nhân ra đời của chủ nghĩa tư bản độc quyền?", options: ["C.Mác và Ph.Ăngghen", "C.Mác", "Ph.Ăng ghen", "V.I.Lênin"], answer: "D" },

        { q: "Câu 136: Theo chủ nghĩa Mác – Lênin, nguyên nhân dẫn đến sự ra đời của chủ nghĩa tư bản độc quyền là gì?", options: ["Do đấu tranh của giai cấp", "Do sự phát triển của lực lượng sản xuất xã hội hóa", "Sự can thiệp điều chỉnh của nhà nước tư sản", "Sự tập trung sản xuất dưới tác động của cách mạng khoa học công nghệ, cạnh tranh, khủng hoảng kinh tế và tín dụng"], answer: "D" },

        { q: "Câu 137: Hãy xác định trình tự phát triển của các hình thức độc quyền?", options: ["Cácten – Tơrớt – Côngxóocximo – Xanhđica", "Tơrớt – Cácten – Xanhđica – Côngxóocximo", "Xanhđica – Cácten – Tơrớt – Côngxóocximo – Cônggơlômêrát", "Cácten – Xanhđica – Tơrớt – Côngxóocximo – Cônggơlômêrát"], answer: "D" },

        { q: "Câu 138: Cạnh tranh giữa các tổ chức độc quyền và xí nghiệp ngoài độc quyền nhằm mục đích gì?", options: ["Tiêu diệt hoặc xáp nhập các xí nghiệp nhỏ", "Hỗ trợ cho các xí nghiệp ngoài độc quyền", "Tìm kiếm ngành đầu tư có giá trị sử dụng cao", "Thôn tính và chi phối các xí nghiệp ngoài độc quyền"], answer: "D" },

        { q: "Câu 139: Mục đích của cạnh tranh giữa các ngành là gì?", options: ["Tìm ngành có giá trị cao", "Tìm ngành có giá trị sử dụng cao", "Tìm ngành có giá cả cao", "Tìm ngành có lợi nhuận cao"], answer: "D" },

        { q: "Câu 140: Sự phát triển của độc quyền ngân hàng tư bản sẽ dẫn đến hệ quả gì?", options: ["Ngân hàng nhỏ phá sản", "Ngân hàng nhỏ sáp nhập", "Phá sản và sáp nhập", "Các ngân hàng lớn liên minh"], answer: "D" },

        { q: "Câu 141: Độc quyền trong nền kinh tế thị trường là gì?", options: ["Liên minh tạo tập đoàn lớn", "Liên minh áp đảo doanh nghiệp nhỏ", "Cá lớn nuốt cá bé", "Liên minh doanh nghiệp lớn chi phối thị trường và định giá"], answer: "D" },

        { q: "Câu 142: Lợi nhuận độc quyền là gì?", options: ["Lợi ích từ xáp nhập doanh nghiệp", "Toàn bộ lợi ích cạnh tranh", "Lợi nhuận có hỗ trợ nhà nước", "Lợi nhuận cao hơn lợi nhuận bình quân do độc quyền"], answer: "D" },


        { q: "Câu 143: Vai trò mới của ngân hàng trong giai đoạn chủ nghĩa tư bản độc quyền là yếu tố nào?", options: ["Trung gian thanh toán – cho vay thu lãi suất", "Trung gian tín dụng, tạo điều kiện thuận lợi về vốn cho nền kinh tế tư bản chủ nghĩa", "Đầu tư tư bản, tích tụ vốn cho nền kinh tế tư bản chủ nghĩa", "Khống chế hoạt động của nền kinh tế tư bản chủ nghĩa"], answer: "D" },

        { q: "Câu 144: Chế độ tham dự của tư bản tài chính được thiết lập thông qua yếu tố nào?", options: ["Quyết định hành chính của nhà nước", "Yêu cầu hành chính của các ngân hàng", "Yêu cầu hành chính của các tổ chức độc quyền công nghiệp", "Số cổ phiếu khống chế để nắm công ty mẹ, con, cháu…"], answer: "D" },

        { q: "Câu 145: Vì sao trong chủ nghĩa tư bản độc quyền, cạnh tranh không bị thủ tiêu?", options: ["Vì tổ chức độc quyền cạnh tranh với các công ty ngoài độc quyền", "Vì các tổ chức độc quyền cạnh tranh với nhau", "Vì xí nghiệp trong nội bộ tổ chức độc quyền cạnh tranh với nhau", "Vì cạnh tranh là quy luật khách quan của kinh tế hàng hóa"], answer: "D" },

        { q: "Câu 146: Sở hữu độc quyền nhà nước trong chủ nghĩa Tư bản là sự kết hợp những yếu tố nào?", options: ["Sở hữu nhà nước và sở hữu tư nhân tư bản chủ nghĩa", "Sở hữu của nhà nước đế quốc", "Sở hữu của các tổ chức độc quyền quốc tế", "Sở hữu nhà nước và sở hữu độc quyền tư nhân"], answer: "D" },

        { q: "Câu 147: Ngày nay, sự can thiệp của nhà nước tư sản thể hiện vào những khâu nào?", options: ["Sản xuất – trao đổi – lợi nhuận – tiêu dùng", "Phân phối – trao đổi – tiêu dùng – lợi nhuận", "Sản xuất – tiêu dùng – lợi nhuận", "Sản xuất – phân phối – trao đổi – tiêu dùng"], answer: "D" },

        { q: "Câu 148: V.I.Lênin đã phân tích chủ nghĩa tư bản độc quyền bằng các đặc điểm kinh tế cơ bản nào?", options: ["Tập trung sản xuất và các tổ chức độc quyền; tư bản tài chính và bọn đầu sỏ tài chính", "Tập trung sản xuất và các tổ chức độc quyền; tư bản tài chính và bọn đầu sỏ tài chính; xuất khẩu tư bản", "Tập trung sản xuất và các tổ chức độc quyền; tư bản tài chính và bọn đầu sỏ tài chính; xuất khẩu tư bản; phân chia thế giới về kinh tế giữa các tổ chức độc quyền", "Tập trung sản xuất và các tổ chức độc quyền; tư bản tài chính và bọn đầu sỏ tài chính; xuất khẩu tư bản; phân chia thế giới về kinh tế giữa các tổ chức độc quyền; sự phân chia thế giới về lãnh thổ giữa các cường quốc đế quốc"], answer: "D" },

        { q: "Câu 149: Cạnh tranh trong nội bộ ngành là gì?", options: ["Sự cạnh tranh giữa các nhà sản xuất trong cùng một ngành, sản xuất ra nhiều loại hàng hóa", "Sự cạnh tranh giữa các nhà sản xuất trong các ngành, sản xuất ra cùng một loại hàng hóa", "Sự cạnh tranh giữa các nhà sản xuất hàng hóa và dịch vụ", "Sự cạnh tranh giữa các nhà sản xuất trong cùng một ngành, sản xuất ra cùng một loại hàng hóa"], answer: "D" },

        { q: "Câu 150: Khi chủ nghĩa tư bản độc quyền ra đời dẫn đến hậu quả gì?", options: ["Phủ định các quy luật trong giai đoạn chủ nghĩa tư bản tự do cạnh tranh", "Phủ định các quy luật của nền sản xuất hàng hóa", "Không làm thay đổi các quy luật của nền sản xuất hàng hóa và của chủ nghĩa tư bản", "Làm cho quy luật kinh tế của nền sản xuất hàng hóa và của chủ nghĩa tư bản có biểu hiện mới"], answer: "D" },

        { q: "Câu 151: Sự kết hợp nhân sự các tổ chức độc quyền và nhà nước, thể hiện trong liên minh nào?", options: ["Liên minh giữa cá nhân tổ chức độc quyền ngân hàng, với tổ chức độc quyền công nghiệp", "Liên minh giữa tổ chức độc quyền công nghiệp với nhà nước", "Liên minh giữa tổ chức độc quyền ngân hàng với nhà nước", "Liên minh giữa tổ chức độc quyền ngân hàng, tổ chức độc quyền công nghiệp và nhà nước"], answer: "D" },

        { q: "Câu 152: Đâu là những biểu hiện chủ yếu của chủ nghĩa tư bản độc quyền nhà nước?", options: ["Sự kết hợp về nhân sự giữa các tổ chức độc quyền và nhà nước; sự hình thành và phát triển sở hữu nhà nước; sự điều tiết kinh tế, chính trị của nhà nước tư sản", "Sự kết hợp về nhân sự giữa những tổ chức độc quyền và nhà nước; sự hình thành và phát triển của sở hữu nhà nước; sự điều tiết kinh tế của nhà nước tư sản", "Sự kết hợp về nhân sự giữa tổ chức độc quyền với nhà nước; sự hình thành và phát triển sở hữu nhà nước; sự điều tiết kinh tế của các nhà nước tư sản", "Sự kết hợp về nhân sự giữa tổ chức độc quyền và nhà nước; sự hình thành và phát triển sở hữu nhà nước; sự điều tiết kinh tế của nhà nước tư sản"], answer: "D" },

        { q: "Câu 153: Cơ chế kinh tế của chủ nghĩa tư bản độc quyền nhà nước là sự dung hợp của yếu tố nào?", options: ["Cơ chế thị trường và độc quyền tư nhân", "Cơ chế thị trường, độc quyền tư nhân và sự can thiệp của nhà nước", "Sở hữu nhà nước và sở hữu tư nhân tư bản chủ nghĩa", "Độc quyền tư nhân và sự điều tiết của nhà nước"], answer: "D" },

        { q: "Câu 154: Chủ nghĩa tư bản độc quyền nhà nước là sự thống nhất của các quá trình nào?", options: ["Tăng sức mạnh của tổ chức độc quyền tư nhân, Nhà nước cho phép tự do tối đa về pháp lý và phạm vi thị trường trong hoạt động kinh doanh", "Tăng vai trò can thiệp của nhà nước tư sản vào các khâu sản xuất – trao đổi – phân phối của các tổ chức độc quyền, làm cho các tổ chức độc quyền phụ thuộc vào nhà nước", "Độc quyền tư nhân và sự điều tiết của nhà nước tư sản sẽ độc lập quyền lực nhưng phụ thuộc về kinh tế", "Kết hợp sức mạnh của tổ chức độc quyền với sức mạnh của nhà nước trong cơ chế thống nhất và nhà nước phụ thuộc vào tổ chức độc quyền"], answer: "D" },

        { q: "Câu 155: Trong cơ chế phát triển của chủ nghĩa tư bản độc quyền thì nhà nước sẽ thế nào?", options: ["Tổ chức độc quyền phụ thuộc vào nhà nước", "Bộ máy nhà nước không phụ thuộc vào tổ chức độc quyền", "Nhà nước chi phối tổ chức độc quyền", "Bộ máy nhà nước phụ thuộc vào các tổ chức độc quyền"], answer: "D" },

        { q: "Câu 156: Bản chất của chủ nghĩa tư bản độc quyền nhà nước là gì?", options: ["Sự kết hợp giữa các tổ chức độc quyền xuyên quốc gia", "Sự kết hợp giữa các nước đế quốc", "Sự đấu tranh giữa tổ chức độc quyền tư nhân và nhà nước tư sản", "Sự kết hợp giữa tổ chức độc quyền tư nhân và nhà nước tư sản"], answer: "D" }
    ],
    5: [
{ q: "Câu 157: Kinh tế thị trường là gì?", options: ["Kiểu tổ chức kinh tế tiến bộ của loài người", "Sản phẩm riêng có của phương thức sản xuất tư bản chủ nghĩa", "Đối lập với nền kinh tế xã hội chủ nghĩa", "Thành tựu của nền văn minh nhân loại và không đối lập với chủ nghĩa xã hội"], answer: "D" },
{ q: "Câu 158: Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa là đường lối chiến lược nhất quán, là mô hình kinh tế tổng quát trong suốt thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam, sự tất yếu khách quan xuất phát từ mấy lý do cơ bản?", options: ["Sáu", "Năm", "Bốn", "Ba"], answer: "D" },
{ q: "Câu 159: Căn cứ trực tiếp để xác định các thành phần kinh tế, là căn cứ nào?", options: ["Chiếm hữu về tư liệu lao động", "Sử dụng tư liệu sản xuất", "Định đoạt tư liệu sản xuất", "Sở hữu về tư liệu sản xuất"], answer: "D" },
{ q: "Câu 160: Thành phần kinh tế nào dưới đây nắm giữ những ngành, lĩnh vực then chốt của nền kinh tế?", options: ["Kinh tế tập thể", "Kinh tế tư nhân", "Kinh tế có vốn đầu tư nước ngoài", "Kinh tế nhà nước"], answer: "D" },
{ q: "Câu 161: Nghị quyết Hội nghị lần thứ Năm, khóa XXII, ngày 3/6/2017 của Ban Chấp hành Trung ương Đảng xác định thành phần kinh tế nào là động lực quan trọng để phát triển kinh kế nước ta hiện nay?", options: ["Kinh tế nhà nước", "Kinh tế có vốn đầu tư nước ngoài", "Kinh tế tập thể", "Kinh tế tư nhân"], answer: "D" },
{ q: "Câu 162: Thành phần kinh tế nào dưới đây chưa được công nhận trong nền kinh tế nước ta hiện nay?", options: ["Kinh tế tập thể", "Kinh tế có vốn đầu tư nước ngoài", "Kinh tế tư nhân", "Kinh tế hàng hóa"], answer: "D" },
{ q: "Câu 163: Nghị quyết Hội nghị lần thứ Năm, khóa XXII, ngày 3/6/2017 của Ban Chấp hành Trung ương Đảng xác định thành phần kinh tế nào nắm giữ vai trò chủ đạo trong nền kinh tế thị trường định hướng xã hội chủ nghĩa?", options: ["Kinh tế tập thể", "Kinh tế có vốn đầu tư nước ngoài", "Kinh tế tư nhân", "Kinh tế nhà nước"], answer: "D" },
{ q: "Câu 164: Doanh nghiệp thuộc khu vực nào đóng vai trò then chốt trong nền kinh tế nước ta?", options: ["Tư nhân", "Có vốn đầu tư nước ngoài", "Cổ phần", "Nhà nước"], answer: "D" },
{ q: "Câu 165: Nghị quyết số 11–NQ/TW ngày 03/6/2017 về hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa, đã nêu ra mấy hạn chế trong thể chế kinh tế thị trường định hướng xã hội chủ nghĩa?", options: ["Ba", "Bốn", "Năm", "Sáu"], answer: "D" },
{ q: "Câu 166: Để hoàn thiện thể chế về sở hữu trong nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam cần phải thực hiện mấy nội dung?", options: ["Ba", "Chín", "Năm", "Bảy"], answer: "D" },
        { q: "Câu 167: Lợi ích kinh tế trước hết của người lao động là gì?", options: ["Tinh thần", "Dân chủ", "Tự do", "Tiền công"], answer: "D" },

        { q: "Câu 168: Tập đoàn Dầu khí Quốc gia Việt Nam hiện tại thuộc thành phần kinh tế gì?", options: ["Tập thể", "Tư nhân", "Có vốn đầu tư nước ngoài", "Nhà nước"], answer: "D" },
        { q: "Câu 169: Hợp tác xã vận tải nước ta hiện nay thuộc thành phần kinh tế nào?", options: ["Nhà nước", "Trách nhiệm hữu hạn nhiều thành viên", "Tư nhân", "Tập thể"], answer: "D" },
        { q: "Câu 170: Kinh tế cá thể, hộ gia đình ở nước ta hiện nay thuộc thành phần kinh tế gì?", options: ["Tập thể", "Nhà nước", "Trách nhiệm hữu hạn nhiều thành viên", "Tư nhân"], answer: "D" },
        { q: "Câu 171: Trong điều kiện kinh tế thị trường, ở đâu có hoạt động kinh tế, ở đó có quan hệ lợi ích. Trong đó, có mấy quan hệ lợi ích kinh tế cơ bản?", options: ["Ba", "Sáu", "Năm", "Bốn"], answer: "D" },
        { q: "Câu 172: Tính tất yếu khách quan của việc phát triển kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam, xuất phát mấy lý do cơ bản?", options: ["Bốn", "Sáu", "Năm", "Ba"], answer: "D" },
        { q: "Câu 173: Trên thế giới đến nay tồn tại các loại thị trường cơ bản nào?", options: ["Thị trường Tư bản chủ nghĩa, thị trường định hướng Xã hội chủ nghĩa", "Thị trường Phong kiến, thị trường Tư bản chủ nghĩa", "Thị trường Chiếm hữu nô lệ, thị trường Phong kiến, thị trường Tư bản chủ nghĩa", "Thị trường hàng hóa, thị trường vốn, thị trường công nghệ, thị trường hàng hóa sức lao động"], answer: "D" },
        { q: "Câu 174: Kinh tế thị trường định hướng xã hội chủ nghĩa Việt Nam là gì?", options: ["Là thành tựu chung của văn minh nhân loại, là kết quả phát triển lâu dài của lực lượng sản xuất và xã hội hóa các quan hệ kinh tế của Việt Nam", "Là một kiểu tổ chức kinh tế – xã hội, mà trong đó sản phẩm sản xuất ra để trao đổi, để bán trên thị trường trong nước Việt Nam và trên thế giới; là nền kinh tế mở, có mối quan hệ đa dạng phong phú tronh kinh tế với các nước", "Là giai đoạn phát triển cao của kinh tế hàng hóa, trong đổ toàn bộ các yếu tổ đầu vào và đầu ra của sản xuất đều thông qua thị trường", "Là nền kinh tế vận hành theo các quy luật của thị trường đồng thời góp phần hướng tới từng bước xác lập một xã hội mà ở đó dân giàu, nước mạnh, dân chủ, công bằng, văn minh; có sự điều tiết của Nhà nước do Đảng Cộng sản Việt Nam lãnh đạo"], answer: "D" },
        { q: "Câu 175: Lý do gì Việt Nam phải tiếp tục hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa?", options: ["Thể chế là những quy định luật lệ của một chế độ xã hội buộc mọi người phải tuân theo", "Thể chế là những quy tắc, luật lệ, bộ máy quản lý và cơ chế vận hành nhằm điều chỉnh các hoạt động của con người trong một chế độ xã hội", "Là hệ thống quy tắc, luật lệ, bộ máy quản lý và cơ chế vận hành nhằm điều chỉnh hành vỉ của các chủ thể kinh tế, các hành vi sản xuất kinh doanh và các quan hệ kinh tế", "Do thể chế kinh tế thị trường định hướng xã hội chủ nghĩa còn chưa đồng bộ, hệ thống thể chế còn chưa đầy đủ, hệ thống thể chế còn kém hiệu lực, hiệu quả, kém đầy đủ các yếu tố thị trường và các loại thị trường"], answer: "D" },
        { q: "Câu 176: Mục đích con người tiến hành các hoạt động kinh tế là gì?", options: ["Dân giàu, nước mạnh, dân chủ, công bằng, văn minh", "Cơ sở thúc đẩy sự phát triển các lợi ích khác", "Thị trường hàng hóa, thị trường vốn, thị trường công nghệ, thị trường hàng hóa sức lao động", "Để thỏa mãn các nhu cầu vật chất, nâng cao phương thức và mức thỏa mãn các nhu cầu vật chất của mình"], answer: "D" },
        { q: "Câu 177: Đảng ta khẳng định: Thời gian tồn tại và phát triển của các thành phần kinh tế ở nước ta bao lâu?", options: ["Trong một thời gian nhất định, hợp tác và cạnh tranh lành mạnh", "Trong những chừng mực nhất định, hợp tác và cạnh tranh lành mạnh", "Trong một thời kỳ nhất định, hợp tác và cạnh tranh lành mạnh", "Lâu dài, hợp tác và cạnh tranh lành mạnh"], answer: "D" },
        { q: "Câu 178: Trong nền kinh tế nước ta hiện nay có hình thức phân phối nào?", options: ["Phân phối theo lao động, tiền vốn và lợi nhuận", "Phân phối theo lao động và phân phối ngoài thù lao lao động thông qua quỹ phúc lợi xã hội", "Phân phối theo tiền vốn và lợi nhuận và phân phối ngoài thù lao lao động thông qua quỹ phúc lợi xã hội", "Phân phối theo kết quả lao động và hiệu quả kinh tế, theo mức đóng góp các nguồn lực khác vào sản xuất kinh doanh, phân phối thông qua phúc lợi xã hội"], answer: "D" },
        { q: "Câu 179: Vì sao trong thời kỳ quá độ lên chủ nghĩa xã hội, nước ta còn tồn tại nhiều thành phần kinh tế?", options: ["Đòi hỏi của thời kỳ công nghiệp hóa, hiện đại hóa và hội nhập quốc tế", "Đòi hỏi của kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta", "Đảng và Nhà nước ta quy định trong Hiến pháp và pháp luật", "Những thành phần kinh tế cũ vẫn còn và xuất hiện thêm nhiều thành phần kinh tế mới"], answer: "D" },
        { q: "Câu 180: Xây dựng và hoàn thiện thể chế về hội nhập kinh tế quốc tế ở Việt Nam hiện nay cần tập trung vào các nhiệm vụ nào?", options: ["Rà soát, hoàn thiện pháp luật về đấu thầu, đầu tư công và các quy định pháp luật có liên quan, kiên quyết xóa bỏ các quy định bất hợp lý", "Hoàn thiện thể chế về cạnh tranh, bảo đảm cạnh tranh lành mạnh; xử lý dứt điểm tình trạng chồng chéo các quy định về điều kiện kinh doanh", "Hoàn thiện thể chế kết hợp phát triển kinh tế với bảo đảm quốc phòng – an ninh. Có cơ chế huy động các nguồn lực xã hội tham gia phát triển kinh tế các vùng biên giới trên đất liền, trên biển và hải đảo", "Tiếp tục rà soát, bổ sung, điều chỉnh hệ thống pháp luật và các thể chế liên quan đáp ứng yêu cầu thực hiện các cam kết quốc tế của Việt Nam, thực hiện nhất quán chủ trương đa phương hóa, đa dạng hóa trong hợp tác kinh tế quốc tế, không để bị lệ thuộc vào một số ít thị trường"], answer: "D" },

        { q: "Câu 181: Trong các nhân tố tăng trưởng kinh tế, Đảng ta xác định nhân tố nào là quyết định nhất của tăng trưởng nhanh và bền vững?", options: ["Vốn", "Khoa học và công nghệ", "Cơ cấu kinh tế, thể chế kinh tế và vai trò nhà nước", "Con người"], answer: "D" },
        { q: "Câu 182: Lợi ích kinh tế là gì?", options: ["Dân giàu, nước mạnh, dân chủ, công bằng, văn minh", "Động lực trực tiếp của các thể chế kinh tế và hoạt động kinh tế xã hội", "Cơ sở thúc đẩy sự phát triển các lợi ích khác", "Lợi ích vật chất, lợi ích thu được khi thực hiện các hoạt động kinh tế của con người"], answer: "D" },
        { q: "Câu 183: Doanh nghiệp FDI thuộc thành phần kinh tế nào?", options: ["Nhà nước", "Tập thể", "Tư nhân", "Có vốn đầu tư nước ngoài"], answer: "D" },
        { q: "Câu 184: Vai trò của lợi ích kinh tế đối với các chủ thể kinh tế – xã hội thể hiện ở khía cạnh chủ yếu nào?", options: ["Lợi ích kinh tế là động lực trực tiếp của các thể chế kinh tế và hoạt động kinh tế xã hội", "Lợi ích vật chất, lợi ích thu được khi thực hiện các hoạt động kinh tế của con người", "Có cơ chế huy động các nguồn lực xã hội tham gia phát triển kinh tế các vùng biên giới trên đất liền, trên biển và hải đảo", "Lợi ích kinh tế là động lực trực tiếp của các thể chế kinh tế và hoạt động kinh tế xã hội, lợi ích kinh tế là cơ sở thúc đẩy sự phát triển các lợi ích khác"], answer: "D" },
        { q: "Câu 185: Trong văn kiện Đại hội Đại biểu toàn quốc lần thứ XII (01/2016) của Đảng, có nêu quan điểm nào sau đây thuộc nguyên tắc lợi ích vì dân?", options: ["Dân giàu, nước mạnh, dân chủ, công bằng, văn minh", "Lợi ích vật chất, lợi ích thu được khi thực hiện các hoạt động kinh tế của con người", "Lợi ích kinh tế là động lực trực tiếp của các thể chế kinh tế và hoạt động kinh tế xã hội, lợi ích kinh tế là cơ sở thúc đẩy sự phát triển các lợi ích khác", "Đổi mới phải luôn luôn quán triệt quan điểm dân là gốc, vì lợi ích của nhân dân, dựa vào nhân dân, phát huy vai trò làm chủ, tinh thần trách nhiệm, sức sáng tạo và mọi nguồn lực của nhân dân, phát huy sức mạnh đại đoàn kết dân tộc"], answer: "D" },
        { q: "Câu 186: Các quan hệ lợi ích trong nền kinh tế thị trường chịu tác động của các nhân tố nào?", options: ["Rà soát, hoàn thiện pháp luật về đấu thầu, đầu tư công và các quy định pháp luật có liên quan, kiên quyết xóa bỏ các quy định bất hợp lý", "Hoàn thiện thể chế về cạnh tranh, bảo đảm cạnh tranh lành mạnh; xử lý dứt điểm tình trạng chồng chéo các quy định về điều kiện kinh doanh", "Trình độ phát triển của lực lượng sản xuất, địa vị của chủ thể trong hệ thống quan hệ sản xuất xã hội", "Trình độ phát triển của lực lượng sản xuất, địa vị của chủ thể trong hệ thống quan hệ sản xuất xã hội, chính sách phân phối thu nhập của nhà nước, hội nhập kinh tế quốc tế"], answer: "D" },
        { q: "Câu 187: Nền kinh tế tri thức được xem là gì?", options: ["Một phương thức sản xuất mới", "Một hình thái kinh tế – xã hội mới", "Một giai đoạn mới của chủ nghĩa tư bản hiện đại", "Một nấc thang phát triển của lực lượng sản xuất"], answer: "D" },
        { q: "Câu 188: Sự khác biệt cơ bản giữa kinh tế thị trường định hướng xã hội chủ nghĩa với kinh tế thị trường tư bản chủ nghĩa ở vấn đề nào?", options: ["Nền kinh tế nhiều thành phần", "Vai trò chủ đạo của kinh tế nhà nước", "Có nhiều hình thức sở hữu tư liệu sản xuất", "Có sự điều tiết của nhà nước xã hội chủ nghĩa"], answer: "D" },
        { q: "Câu 189: Đại hội Đại biểu toàn quốc lần thứ IX (4/2001) của Đảng Cộng sản Việt Nam xác định mô hình kinh tế tổng quát trong thời kỳ quá độ ở nước ta là gì?", options: ["Kinh tế nhiều thành phần", "Kinh tế kế hoạch hóa theo định hướng xã hội chủ nghĩa", "Kinh tế nhiều thành phần có sự quản lý của nhà nước", "Kinh tế thị trường định hướng xã hội chủ nghĩa"], answer: "D" },
        { q: "Câu 190: Để đảm bảo hài hòa các lợi ích kinh tế, nhà nước có vai trò như thế nào?", options: ["Thực hiện lợi ích kinh tế theo nguyên tắc thị trường, theo chính sách của nhà nước và vai trò của các tổ chức xã hội", "Lợi ích vật chất, lợi ích thu được khi thực hiện các hoạt động kinh tế của con người", "Lợi ích kinh tế là động lực trực tiếp của các thể chế kinh tế và hoạt động kinh tế xã hội, lợi ích kinh tế là cơ sở thúc đẩy sự phát triển các lợi ích khác", "Bảo vệ lợi ích hợp pháp, tạo môi trường thuận lợi, điều hòa lợi ích cá nhân doanh nghiệp – xã hội, kiểm soát, ngăn ngừa tiêu cực đối với sự phát triển xã hội, giải quyết những mâu thuẫn trong quan hệ lợi ích kinh tế"], answer: "D" },

        { q: "Câu 191: Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam phải thực hiện gắn tăng trưởng kinh tế với vấn đề gì?", options: ["Phát triển văn hóa", "Phát triển xã hội", "Thực hiện dân chủ", "Công bằng xã hội"], answer: "D" },
        { q: "Câu 192: Phát triển kinh tế ở Việt Nam đi đôi với vấn đề gì?", options: ["Công bằng xã hội", "Nước mạnh", "Thực hiện dân chủ", "Phát triển văn hóa – xã hội"], answer: "D" },
        { q: "Câu 193: Trong quản lý và phát triển các doanh nghiệp thuộc mọi thành phần kinh tế, cần phát huy vấn đề gì?", options: ["Lợi ích kinh tế là động lực trực tiếp của các thể chế kinh tế và hoạt động kinh tế xã hội, lợi ích kinh tế là cơ sở thúc đẩy sự phát triển các lợi ích khác", "Pháp luật, các chiến lược, kế hoạch, quy hoạch và cơ chế chính sách cùng các công cụ kinh tế trên cơ sở tôn trọng những nguyên tắc của thị trường", "Cương lĩnh, đường lối phát triển kinh tế – xã hội và các chủ trương, quyết sách lớn trong từng thời phát triển của đất nước", "Mặt tích cực có lợi cho đất nước, đồng thời kiểm tra, kiểm sát, kiểm soát, thực hiện công khai, minh bạch, ngăn chặn, hạn chế mặt tiêu cực"], answer: "D" },
        { q: "Câu 194: Xây dựng và hoàn thiện thể chế về hội nhập kinh tế quốc tế ở Việt Nam hiện nay cần tập trung vào bao nhiêu nhiệm vụ?", options: ["Năm", "Bốn", "Ba", "Hai"], answer: "D" },
        { q: "Câu 195: Phương thức và mức độ thỏa mãn các nhu cầu vật chất trước hết phụ thuộc vào gì?", options: ["Lợi ích kinh tế", "Quan hệ lợi ích kinh tế", "Sức mạnh đại đoàn kết dân tộc", "Số lượng, chất lượng hàng hóa và dịch vụ mà xã hội có được"], answer: "D" },
        { q: "Câu 196: Nền kinh tế thị trường Việt Nam khác với nền kinh tế thị trường khác ở chỗ nào?", options: ["Cần có vai trò điều tiết của nhà nước", "Kinh tế nhà nước giữ vai trò chủ đạo", "Kinh tế tư nhân là động lực quan trọng.", "Nhà nước phải được đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam"], answer: "D" },
        { q: "Câu 197: Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta là bước đi quan trọng nhằm vấn đề gì?", options: ["Nhà nước phải được đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam", "Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là động lực quan trọng.", "Nhiều hình thức sở hữu, nhiều thành phần kinh tế.", "Xã hội hóa nền sản xuất xã hội, là bước đi tất yếu của sự phát triển từ sản xuất nhỏ lên sản xuất lớn, là bước quá độ đi lên chủ nghĩa xã hội"], answer: "D" },
        { q: "Câu 198: Thể chế kinh tế là gì?", options: ["Các chủ thể thuộc các thành phần kinh tế ở nước ta bình đẳng, hợp tác, cạnh tranh cùng phát triển theo pháp luật", "Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là động lực quan trọng.", "Xã hội hóa nền sản xuất xã hội, là bước đi tất yếu của sự phát triển từ sản xuất nhỏ lên sản xuất lớn, là bước quá độ đi lên chủ nghĩa xã hội", "Là hệ thống quy tắc, pháp luật, bộ máy quản lý và cơ chế vận hành nhằm điều chỉnh hành vi của các chủ thể kinh tế, các hành vi sản xuất kinh doanh và các quan hệ kinh tế"], answer: "D" },
        { q: "Câu 199: Đại hội XII của Đảng có sự phát triển mới bằng việc đưa ra quan niệm: Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là nền kinh tế vận hành đầy đủ, đồng bộ theo các quy luật của kinh tế thị trường, đồng thời đảm bảo định hướng xã hội chủ nghĩa phù hợp với từng giai đoạn phát triển đất nước, đó là nền kinh tế như thế nao?", options: ["Phát huy thế mạnh, trong đó ưu tiên kinh tế Nhà nước.Khai thác tiềm năng, lợi thế, trong đó ưu tiên kinh tế tư nhân", "Phát triển, cạnh tranh vì mục tiêu lợi nhuận. Phát triển lâu dài, hợp tác và cạnh tranh lành mạnh", "Do thể chế kinh tế thị trường định hướng xã hội chủ nghĩa còn chưa đồng bộ, hệ thống thể chế còn chưa đầy đủ, hệ thống thể chế còn kém hiệu lực, hiệu quả, kém đầy đủ các yếu tố thị trường và các loại thị trường", "Nền kinh tế thị trường hiện đại và hội nhập quốc tế; có sự quản lý của nhà nước pháp quyền xã hội chủ nghĩa, do Đảng Cộng sản Việt Nam lãnh đạo, nhằm mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh"], answer: "D" },
        { q: "Câu 200: Đảng Cộng sản Việt Nam lãnh đạo nền kinh tế thị trường định hướng xã hội chủ nghĩa thông qua nội dung nào?", options: ["Lợi ích kinh tế theo nguyên tắc thị trường, theo chính sách của nhà nước và vai trò của các tổ chức xã hội", "Pháp luật, các chiến lược, kế hoạch, quy hoạch và cơ chế chính sách cùng các công cụ kinh tế trên cơ sở tôn trọng những nguyên tắc của thị trường", "Lợi ích kinh tế là động lực trực tiếp của các thể chế kinh tế và hoạt động kinh tế xã hội, lợi ích kinh tế là cơ sở thúc đẩy sự phát triển các lợi ích khác", "Cương lĩnh, đường lối phát triển kinh tế – xã hội và các chủ trương, quyết sách lớn trong từng thời phát triển của đất nước"], answer: "D" },
        { q: "Câu 201: Nhà nước ta quản lý nền kinh tế thị trường định hướng xã hội chủ nghĩa thông qua nội dung nào?", options: ["Lợi ích kinh tế theo nguyên tắc thị trường, theo chính sách của nhà nước và vai trò của các tổ chức xã hội", "Cương lĩnh, đường lối phát triển kinh tế – xã hội và các chủ trương, quyết sách lớn trong từng thời phát triển của đất nước", "Lợi ích kinh tế là động lực trực tiếp của các thể chế kinh tế và hoạt động kinh tế xã hội, lợi ích kinh tế là cơ sở thúc đẩy sự phát triển các lợi ích khác", "Pháp luật, các chiến lược, kế hoạch, quy hoạch và cơ chế chính sách cùng các công cụ kinh tế trên cơ sở tôn trọng những nguyên tắc của thị trường"], answer: "D" },

        { q: "Câu 202: Tổng kết thực tiễn đổi mới kinh tế, Đại hội IX khẳng định: Kinh tế thị trường định hướng xã hội chủ nghĩa là gì?", options: ["Nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường, có sự quản lý của nhà nước, dưới sự lãnh đạo của Đảng Cộng sản Việt Nam", "Nền kinh tế vận hành đầy đủ, đồng bộ theo các quy luật của kinh tế thị trường", "Nền kinh tế thị trường hiện đại và hội nhập quốc tế; có sự quản lý của nhà nước pháp quyền xã hội chủ nghĩa, do Đảng Cộng sản Việt Nam lãnh đạo", "Mô hình kinh tế tổng quát trong thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta"], answer: "D" },
        { q: "Câu 203: Đại hội đại biểu toàn quốc lần thứ XI (01/2011) của Đảng khẳng định: Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở nước ta là gì?", options: ["Nền kinh tế vận hành đầy đủ, đồng bộ theo các quy luật của kinh tế thị trường", "Nền kinh tế thị trường hiện đại và hội nhập quốc tế; có sự quản lý của nhà nước pháp quyền xã hội chủ nghĩa, do Đảng Cộng sản Việt Nam lãnh đạo", "Mô hình kinh tế tổng quát của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta", "Nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường, có sự quản lý của nhà nước, dưới sự lãnh đạo của Đảng Cộng sản Việt Nam"], answer: "D" },
        { q: "Câu 204: Mục tiêu kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là gì?", options: ["Nền kinh tế thị trường hiện đại và hội nhập quốc tế; có sự quản lý của nhà nước pháp quyền xã hội chủ nghĩa, do Đảng Cộng sản Việt Nam lãnh đạo", "Mô hình kinh tế tổng quát của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta", "Nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường, có sự quản lý của nhà nước, dưới sự lãnh đạo của Đảng Cộng sản", "Phương tiện để phát triển lực lượng sản xuất, xây dựng co sở vật chất – kỹ thuật của chủ nghĩa xã hội; nâng cao đời sống nhân dân, thực hiện dân giàu, nước mạnh, dân chủ, công bằng, văn minh"], answer: "D" },
        { q: "Câu 205: Đại hội đại biểu toàn quốc lần thứ XII (01/2011) của Đảng có sự phát triển mới bằng việc đưa ra quan niệm: “Nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là nền kinh tế vận hành đầy đủ, đồng bộ theo các quy luật của kinh tế thị trường, đồng thời bảo đảm định hướng xã hội chủ nghĩa phù hợp với từng giai đoạn phát triển của đất nước.Đó là nền kinh tế thị trường hiện đại và hội nhập quốc tế; có sự quản lý của nhà nước pháp quyền xã hội chủ nghĩa, do Đảng Cộng sản Việt Nam lãnh đạo”, nhằm mục tiêu gì?", options: ["Nước mạnh, dân giàu, dân chủ, công bằng, văn minh", "Dân giàu, nước mạnh, công bằng, dân chủ, văn minh", "Nước mạnh, dân chủ, công bằng, dân giàu, văn minh", "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"], answer: "D" },
        { q: "Câu 206: Các chủ thể thuộc các thành phần kinh tế ở nước ta như thế nào?", options: ["Nhà nước phải được đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam", "Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là động lực quan trọng.", "Xã hội hóa nền sản xuất xã hội, là bước đi tất yếu của sự phát triển từ sản xuất nhỏ lên sản xuất lớn, là bước quá độ đi lên chủ nghĩa xã hội", "Bình đẳng, hợp tác, cạnh tranh cùng phát triển theo pháp luật"], answer: "D" },
        { q: "Câu 207: Trong quản lý và phát triển các doanh nghiệp thuộc mọi thành phần kinh tế, cần phát huy những gì?", options: ["Nhà nước phải được đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam", "Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là động lực quan trọng.", "Bình đẳng, hợp tác, cạnh tranh cùng phát triển theo pháp luật", "Mặt tích cực có lợi cho đất nước"], answer: "D" },
        { q: "Câu 208: Để phát triển thành công kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam cần phải phát huy những gì?", options: ["Mặt tích cực có lợi cho đất nước", "Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là động lực quan trọng.", "Bình đẳng, hợp tác, cạnh tranh cùng phát triển theo pháp luật", "Sức mạnh về trí tuệ, nguồn lực và sự đồng thuận của toàn dân tộc"], answer: "D" }
    ],
    6: [
        { q: "Câu 209: Việc ứng dụng và trang bị những thành tựu khoa học và công nghệ tiên tiến, hiện đại vào quá trình sản xuất, kinh doanh, dịch vụ và quản lý kinh tế – xã hội, gọi là quá trình gì?", options: ["Công nghiệp hóa", "Tự động hóa", "Điện tử hóa", "Hiện đại hóa"], answer: "D" },
        { q: "Câu 210: Hiện đại hóa là quá trình ứng dụng và trang bị những thành tựu khoa học và công nghệ tiên tiến, hiện đại vào các quá trình gì?", options: ["Sản xuất, kinh doanh, dịch vụ", "Xây dựng cơ cấu kinh tế hợp lý", "Xây dựng cơ cấu kinh tế hợp lý, hiện đại và hiệu quả", "Sản xuất, kinh doanh, dịch vụ và quản lý kinh tế – xã hội"], answer: "D" },
        { q: "Câu 211: Chuyển đổi căn bản, toàn diện các hoạt động kinh tế và quản lý kinh tế – xã hội từ sử dụng sức lao động thủ công là chính sang sử dụng một cách phổ biến sức lao động cùng với công nghệ, phương tiện, phương pháp tiên tiến, hiện đại nhằm tạo ra năng xuất lao động xã hội cao, gọi là quá trình gì?", options: ["Công nghiệp hóa, điện tử hóa", "Hiện đại hóa, tự động hóa", "Hiện đại hóa, điện tử hóa", "Công nghiệp hóa, hiện đại hóa"], answer: "D" },
        { q: "Câu 212: Vì sao nước ta công nghiệp hóa phải gắn liền với hiện đại hóa?", options: ["Vì công nghiệp hóa luôn gắn liền với hiện đại hóa", "Vì đó là yêu cầu của thời kỳ hội nhập kinh tế toàn cầu", "Vì các nước trên thế giới đều thực hiện đồng thời hai quá trình này", "Vì công nghiệp hóa muộn hơn so với các nước khác"], answer: "D" },
        { q: "Câu 213: Nước ta thực hiện công nghiệp hóa với mục đích gì?", options: ["Đảm bảo hòa bình, độc lập dân tộc", "Tạo ra nhiều cơ hội việc làm cho người lao động", "Xây dựng cơ cấu kinh tế hiện đại", "Tạo ra năng suất lao động xã hội cao"], answer: "D" },
        { q: "Câu 214: Một trong những tác động to lớn, toàn diện của công nghiệp hóa, hiện đại hóa ở nước ta là gì?", options: ["Xây dựng được nền kinh tế nhiều thành phần", "Các dân tộc trong nước đoàn kết, bình đẳng", "Con người có điều kiện phát triển toàn diện", "Tạo tiền đề thúc đẩy sự tăng trưởng và phát triển kinh tế – xã hội"], answer: "D" },
        { q: "Câu 215: Công nghiệp hóa, hiện đại hóa ở Việt Nam có mấy đặc điểm chủ yếu?", options: ["Ba", "Năm", "Sáu", "Bốn"], answer: "D" },
        { q: "Câu 216: Theo Giáo trình Kinh tế chính trị Mác – Lênin: “Quá trình chuyển đổi nền sản xuất xã hội từ dựa trên lao động thủ công là chính sang nền sản xuất xã hội dựa chủ yếu trên lao động bằng máy móc nhằm tạo ra năng suất lao động xã hội cao”, quá trình đó gọi là gì?", options: ["Hiện đại hóa", "Cách mạng công nghiệp", "Tự động hóa", "Công nghiệp hóa"], answer: "D" },
        { q: "Câu 217: Công nghiệp hóa, hiện đại hóa ở Việt Nam nhằm thực hiện mục tiêu gì?", options: ["Hợp tác cùng có lợi, tôn trọng độc lập chủ quyền, gắn liền chủ nghĩa xã hội", "Văn minh, hiện đại, trí tuệ, gắn kinh tế tri thức", "Dân giàu, nước mạnh, dân chủ, hội nhập, tiến bộ", "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"], answer: "D" },
        { q: "Câu 218: Việc tiếp thu và phát triển khoa học, công nghệ mới, hiện đại của các nước kém phát triển có thể thực hiện bằng mấy con đường cơ bản?", options: ["Sáu", "Năm", "Bốn", "Ba"], answer: "D" },
        { q: "Câu 219: Để chủ động hội nhập kinh tế quốc tế một cách có hiệu quả, trong thời gian tới cần chú ý thực hiện mấy giải pháp cụ thể?", options: ["Mười", "Tám", "Sáu", "Bốn"], answer: "D" },
        { q: "Câu 220: Cách mạng công nghiệp lần thứ nhất (1.0) bắt đầu vào thời gian nào?", options: ["Giữa thế kỷ XV đến giữa thế kỷ XVII", "Giữa thế kỷ XIX đến giữa thế kỷ XX", "Cuối thế kỷ XIX đến đầu thế kỷ XX", "Giữa thế kỷ XVIII đến giữa thế kỷ XIX"], answer: "D" },
        { q: "Câu 221: Cách mạng công nghiệp lần thứ nhất (1.0) khởi phát từ nước nào?", options: ["Mỹ", "Trung Quốc", "Nhật Bản", "Anh"], answer: "D" },
        { q: "Câu 222: Cách mạng công nghiệp lần thứ hai (2.0) bắt đầu vào thời gian nào?", options: ["Giữa thế kỷ XV đến giữa thế kỷ XVII", "Giữa thế kỷ XIX đến giữa thế kỷ XX", "Giữa thế kỷ XVIII đến giữa thế kỷ XIX", "Nửa cuối thế kỷ XIX đến đầu thế kỷ XX"], answer: "D" },
        { q: "Câu 223: Cách mạng công nghiệp lần thứ ba (3.0) bắt đầu vào thời gian nào?", options: ["Giữa thế kỷ XV đến giữa thế kỷ XVII", "Giữa thế kỷ XIX đến giữa thế kỷ XX", "Giữa thế kỷ XVIII đến giữa thế kỷ XIX", "Những năm đầu thập niên 60 thế kỷ XX đến cuối thế XX"], answer: "D" },
        { q: "Câu 224: Cách mạng công nghiệp lần thứ tư (4.0) được đề cập lần đầu tiên ở đâu, vào năm nào?", options: ["Hội chợ triển lãm ở Nhật Bản, năm 2011", "Hội chợ triển lãm ở Mỹ, năm 2011", "Hội chợ triển lãm ở Pháp, năm 2011", "Hội chợ triển lãm công nghệ Hannover ở Cộng hòa liên bang Đức, năm 2011"], answer: "D" },
        { q: "Câu 225: Phát triển mạnh mẽ lực lượng sản xuất, xây dựng cơ cấu kinh tế hợp lý, hiện đại và hiệu quả ở nước ta hiện nay, là muốn đề cặp vấn đề gì?", options: ["Biểu hiện tính tất yếu khách quan của công nghiệp hóa, hiện đại hóa", "Khái niệm công nghiệp hóa, hiện đại hóa", "Một trong các tác dụng to lớn và toàn diện của công nghiệp hóa, hiện đại hóa", "Nội dung của công nghiệp hóa, hiện đại hóa "], answer: "D" },

        { q: "Câu 226: Cơ cấu kinh tế là tổng thể hữu cơ giữa cơ cấu ngành kinh tế với yếu tố nào?", options: ["Thành phần kinh tế và lĩnh vực kinh tế", "Thành phần kinh tế và khu kinh tế công nghệ cao", "Cơ chế kinh tế, thành phần kinh tế và tập đoàn kinh tế", "Vùng kinh tế và thành phần kinh tế"], answer: "D" },
        { q: "Câu 227: Cơ cấu nào nói lên xu hướng chuyển dịch của cơ cấu kinh tế nước ta?", options: ["Kinh tế hậu công nghiệp", "Nông, công nghiệp và thương mại điện tử", "Kinh tế tri thức", "Nông, công nghiệp và dịch vụ hiện đại"], answer: "D" },
        { q: "Câu 228: Trong sản xuất, kinh doanh cần lựa chọn ngành, mặt hàng có khả năng cạnh tranh cao, phù hợp với nhu cầu của thị trường trong nước và thế giới, nhất là khi nước ta là thành viên của WTO, đó là gì?", options: ["Nội dung của phát triển lực lượng sản xuất", "Một trong các nội dung của công nghiệp hóa, hiện đại hóa đất nước", "Chuyển dịch cơ cấu kinh tế hợp lý, hiệu quả", "Trách nhiệm của công dân đối với sự nghiệp công nghiệp hóa, hiện đại hóa đất nước"], answer: "D" },
        { q: "Câu 229: Tổ chức và phát triển kinh tế (OCED) đưa ra định nghĩa “Kinh tế tri thức” là gì?", options: ["Là “Nền kinh tế công nghệ cao, sử dụng chất xám trong mọi lĩnh vực và lấy tri thức làm động lực, công cụ phục vụ cho mọi hoạt động kinh tế xã hội”", "Là “Nền kinh tế đặt tri thức đổi mới, tri thức sáng tạo và các chính sách liên quan vào trọng tâm của chiến lược phát triển quốc gia”", "Là \"Nền kinh tế dựa vào tri thức như động lực chính cho sự tăng trưởng kinh tế”", "Là “Nền kinh tế trong đó sự sản sinh ra, phổ cập và sử dụng tri thức giữ vai trò quyết định nhất đối với sự phát triển kinh tế, tạo ra của cải, nâng cao chất lượng cuộc sống”"], answer: "D" },
        { q: "Câu 230: Cuộc cách mạng Công nghiệp 4.0 dựa trên “ba trụ cột” chính là gì?", options: ["Trí tuệ nhân tạo, công nghệ nano và vật lý", "Công nghệ nano, công nghệ sinh học và điện – điện tử", "Năng lượng tái tạo, kỹ thuật số và công nghệ sinh học", "Kỹ thuật số, công nghệ sinh học và vật lý"], answer: "D" },
        { q: "Câu 231: Công nghiệp hóa, hiện đại hóa ở nước ta là quá trình chuyển đổi căn bản, toàn diện các hoạt động kinh tế và quản lý kinh tế – xã hội từ sử dụng sức lao động thủ công là chính sang sử dụng một cách phổ biến sức lao động cùng với công nghệ, phương tiện, phương pháp tiên tiến, hiện đại, là nhằm vào vấn đề gì?", options: ["Phát triển kinh tế thị trường hiện đại", "Xây dựng cơ cấu kinh tế hợp lý, hiện đại, hiệu quả", "Xác lập địa vị thống trị của quan hệ sản xuất xã hội chủ nghĩa", "Tạo ra năng suất lao động xã hội cao"], answer: "D" },
        { q: "Câu 232: Công nghiệp hóa kiểu Liên Xô, dựa trên con đường nào?", options: ["Ứng dụng những thành tựu khoa học nhân loại, phát triển công nghiệp, sản xuất hàng tiêu dùng và hàng xuất khẩu", "Chuyển giao công nghệ, phát triển công nghiệp toàn diện và tăng cường quản lý của Nhà nước", "Ưu tiên phát triển công nghiệp nặng, công nghiệp nhẹ và nông nghiệp", "Ưu tiên phát triển công nghiệp nặng"], answer: "D" },
        { q: "Câu 233: Công nghiệp hóa ở Nhật Bản và các nước nhóm NICs, dựa trên con đường nào?", options: ["Mở rộng tối đa hợp tác quốc tế, ứng dụng thành tựu khoa học, công nghệ tiên tiến, hiện đại của thế giới", "Đầu tư nghiên cứu, chế tạo và hoàn thiện dần dần trình độ công nghệ từ trình độ thấp đến trình độ cao", "Tiếp nhận chuyển giao công nghệ hiện đại từ các nước phát triển hơn", "Xây dựng chiến lược phát triển khoa học, công nghệ nhiều tầng, kết hợp cả công nghệ truyền thống và công nghệ hiện đại, vừa nghiên cứu chế tạo vừa chuyển giao công nghệ từ các nước phát triển hơn"], answer: "D" },
        { q: "Câu 234: Ở nước ta, công nghiệp hóa phải gắn liền với hiện đại hóa là nhằm mục đích gì?", options: ["Để xây dựng cơ sở vật chất, kỹ thuật cho chủ nghĩa xã hội", "Để phát triển mạnh mẽ lực lượng sản xuất", "Để phát triển kinh tế độc lập, tự chủ và chủ động hội nhập quốc tế", "Tránh tụt hậu xa hơn về kinh tế, kỹ thuật – công nghệ giữa nước ta với khu vực và thế giới"], answer: "D" },
        { q: "Câu 235: Nhà máy lọc dầu Dung Quất, nhà máy xơ sợi Đình Vũ, các nhà máy Ethanol các tỉnh, giá thành sản phẩm trong sản xuất cao hơn giá cả thị trường nguyên nhân chủ yếu là do yếu tố gì?", options: ["Thiếu kinh nghiệm", "Không đủ vốn", "Lạm phát tăng cao", "Công nghệ lạc hậu"], answer: "D" },
        { q: "Câu 236: Muốn giảm thời gian lao động cá biệt của hàng hóa thấp hơn thời gian lao động xã hội cần thiết thì yếu tố có tính quyết định là yếu tố nào?", options: ["Tiền vốn", "Trình độ quản lý", "Chất lượng nguồn nhân lực", "Công nghệ"], answer: "D" },
        { q: "Câu 237: Một trong những nội dung của công nghiệp hóa, hiện đại hóa về phát triển lực lượng sản xuất là gì?", options: ["Xây dựng đội ngũ cán bộ, đảng viên tâm huyết, trách nhiệm", "Xây dựng kết cấu hạ tầng hiện đại", "Xây dựng nhà nước pháp quyền xã hội chủ nghĩa vững mạnh", "Đào tạo đội ngũ người lao động có chuyên môn kỹ thuật cao"], answer: "D" },
        { q: "Câu 238: Thực hiện cơ khí hóa nền sản xuất xã hội bằng cách chuyển nền sản xuất. Hãy chọn nội dung đúng nhất với quá trình chuyển đổi đó?", options: ["Từ công nghệ lạc hậu sang công nghệ tiên tiến", "Từ kỹ thuật thủ công sang dựa trên công nghệ hiện đại", "Từ kỹ thuật cơ khí sang dựa trên công nghệ số", "Từ kỹ thuật thủ công sang dựa trên kỹ thuật cơ khí"], answer: "D" },
        { q: "Câu 239: Quan điểm về công nghiệp hóa, hiện đại hóa ở Việt Nam trong bối cảnh cách mạng công nghiệp lần thứ tư (4.0) là gì?", options: ["Hoàn thiện thể chế, xây dựng nền kinh tế dựa trên nền tảng sáng tạo", "Nắm bắt và đẩy mạnh việc ứng dụng những thành tựu của cuộc cách mạng công nghiệp 4.0", "Chuẩn bị đầy đủ các điều kiện cần thiết để ứng phó với những tác động tiêu cực của cách mạng công nghiệp 4.0", "Chủ động chuẩn bị đầy đủ các điều kiện cần thiết, giải phóng mọi nguồn lực, các biện pháp thích ứng phải được thực hiện đồng bộ, phát huy sức sáng tạo của toàn dân"], answer: "D" },
        { q: "Câu 240: Để công nghiệp hóa, hiện đại hóa ở Việt Nam cần phải chuẩn bị những nội dung nào?", options: ["Hoàn thiện thể chế, xây dựng nền kinh tế dựa trên nền tảng sáng tạo, nắm bắt và đẩy mạnh việc ứng dụng những thành tựu của cuộc cách mạng công nghiệp 4.0", "Chủ động chuẩn bị đầy đủ các điều kiện cần thiết, giải phóng mọi nguồn lực, các biện pháp thích ứng phải được thực hiện đồng bộ, phát huy sức sáng tạo của toàn dân", "Chuẩn bị đầy đủ các điều kiện cần thiết để ứng phó với những tác động tiêu cực của cách mạng công nghiệp 4.0", "Tạo lập những điều kiện để có thể thực hiện chuyển đổi từ nền sản xuất – xã hội lạc hậu sang nền sản xuất – xã hội tiến bộ, thực hiện các nhiệm vụ để chuyển đổi nền sản xuất – xã hội lạc hậu sang nền sản xuất – xã hội hiện đại"], answer: "D" },
        { q: "Câu 241: Người nông dân ở nước ta đang áp dụng mạnh mẽ máy móc vào sản xuất, vừa đưa các loại giống cây trồng; vật nuôi mới có năng xuất cao là thể hiện quá trình gì?", options: ["Cơ khí hóa, nông thôn hóa", "Cơ khí hóa, điện tử hóa", "Hiện đại hóa, nông thôn hóa", "Công nghiệp hóa, hiện đại hóa"], answer: "D" },
        { q: "Câu 242: Ở nước ta hiện nay, muốn xây dựng cơ sở vật chất kỹ thuật, rút ngắn khoảng cách tụt hậu về kinh tế, tạo ra năng suất lao động xã hội cao, cần phải làm gì?", options: ["Thích ứng nhanh với cuộc cách mạng công nghệ 4.0", "Tái cơ cấu nền kinh tế, thúc đẩy mô hình tăng trưởng", "Đẩy mạnh xây dựng kết cấu hạ tầng kinh tế – kỹ thuật", "Thực hiện công nghiệp hóa, hiện đại hóa"], answer: "D" },
        { q: "Câu 243: Tiếp tục đổi mới cơ cấu nền kinh tế, Nghị quyết Hội nghị Trung ương Đảng lần thứ Năm (khóa XII) xác định kinh tế Nhà nước giữ vai trò chủ đạo, trong đó doanh nghiệp Nhà nước phải như thế nào?", options: ["Đóng vai trò trụ cột của kinh tế Nhà nước", "Đóng vai trò nền tảng của kinh tế Nhà nước", "Giữ vị trí độc tôn trong kinh tế Nhà nước", "Là một bộ phận then chốt của kinh tế Nhà nước"], answer: "D" },
        { q: "Câu 244: Nghị quyết Hội nghị lần thứ Năm Ban Chấp hành Trung ương Đảng (khóa XII) đã xác định thành phần kinh kế nào đóng vai trò là nòng cốt để phát triển kinh tế độc lập, tự chủ?", options: ["Kinh tế Nhà nước, kinh tế có vốn đầu tư nước ngoài", "Kinh tế Nhà nước và kinh tế tư nhân", "Kinh tế Nhà nước, các doanh nghiệp FDI", "Kinh tế Nhà nước, kinh tế tập thể cùng với kinh tế tư nhân"], answer: "D" },
        { q: "Câu 245: Để xây dựng thành công nền kinh tế độc lập tự chủ đi đôi với tích cực và chủ động hội nhập kinh tế quốc tế, đòi hỏi Việt Nam phải thực hiện mấy biện pháp?", options: ["Ba", "Bốn", "Sáu", "Năm"], answer: "D" },
        { q: "Câu 246: Nền kinh tế độc lập, tự chủ là nền kinh tế như thế nào?", options: ["Thị trường định hướng xã hội chủ nghĩa", "Thị trường tư bản chủ nghĩa", "Bị lệ thuộc, phụ thuộc vào nước khác, người khác", "Không bị lệ thuộc, phụ thuộc vào nước khác, người khác"], answer: "D" },
        { q: "Câu 247: Hiện nay, Việt Nam đã có quan hệ ngoại giao với bao nhiêu nước?", options: ["184 nước", "185 nước", "186 nước", "187 nước"], answer: "D" },
        { q: "Câu 248: Hiện nay, Việt Nam đã có quan hệ kinh tế với bao nhiêu quốc gia và vùng lãnh thổ?", options: ["220 nước và vùng lãnh thổ", "221 nước và vùng lãnh thổ", "222 nước và vùng lãnh thổ", "223 nước và vùng lãnh thổ"], answer: "D" },
        { q: "Câu 249: Độc lập, tự chủ và hội nhập quốc tế có mối quan hệ với nhau như thế nào?", options: ["Gắn chặt", "Độc lập", "Thống nhất", "Biện chứng"], answer: "D" },
        { q: "Câu 250: Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước là nhiệm vụ trọng tâm nhằm xây dựng nền kinh tế độc lập, tự chủ, xây dựng cơ sở vật chất cho chủ nghĩa xã hội, giúp cho Việt Nam như thế nào?", options: ["Dân giàu, nước mạnh, dân chủ, công bằng, văn minh", "Bình đẳng, cùng có lợi, tôn trọng độc lập, chủ quyền và không can thiệp vào công việc nội bộ của nhau", "Tăng cường năng lực cạnh tranh của nền kinh tế bằng đổi mới", "Đi tắt, đón đầu, tránh được nguy cơ tụt hậu xa hơn về kinh tế so với các nước khác"], answer: "D" }
    ],
    7: [
        { q: "Câu 248: Hiện nay, Việt Nam đã có quan hệ kinh tế với bao nhiêu quốc gia và vùng lãnh thổ?", options: ["220 nước và vùng lãnh thổ", "221 nước và vùng lãnh thổ", "222 nước và vùng lãnh thổ", "223 nước và vùng lãnh thổ"], answer: "D" },
        { q: "Câu 249: Độc lập, tự chủ và hội nhập quốc tế có mối quan hệ với nhau như thế nào?", options: ["Gắn chặt", "Độc lập", "Thống nhất", "Biện chứng"], answer: "D" },
        { q: "Câu 250: Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước là nhiệm vụ trọng tâm nhằm xây dựng nền kinh tế độc lập, tự chủ, xây dựng cơ sở vật chất cho chủ nghĩa xã hội, giúp cho Việt Nam như thế nào?", options: ["Dân giàu, nước mạnh, dân chủ, công bằng, văn minh", "Bình đẳng, cùng có lợi, tôn trọng độc lập, chủ quyền và không can thiệp vào công việc nội bộ của nhau", "Tăng cường năng lực cạnh tranh của nền kinh tế bằng đổi mới", "Đi tắt, đón đầu, tránh được nguy cơ tụt hậu xa hơn về kinh tế so với các nước khác"], answer: "D" }


    ]
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
            container.querySelectorAll("input").forEach(i => {
                i.disabled = true;
                if (i.value === correct) {
                    i.parentElement.style.color = "green";
                }
            });

            if (this.value === correct) {
                score++;
                result.innerHTML = "✔ Đúng";
                result.style.color = "green";
            } else {
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
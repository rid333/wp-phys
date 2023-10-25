import SideBar from "./SideBar";
import elinshome from "../assets/home/elins-home.jpg";
import { Timeline } from 'react-twitter-widgets';

const PostDetails = () => {

    return (
        <>
        <div className="flex max-w-7xl m-auto py-10 gap-x-8 px-10 mb-20 bg-gray-50">
            <div className="flex flex-col w-2/3 sm:w-full items-center gap-y-10">
                <title className="flex flex-col gap-y-2">
                    <div className="font-semibold breadcrumbs">
                        <ul>
                            <li><a>News</a></li> 
                            <li><a>Berita</a></li>
                        </ul>
                    </div>
                    <h1 className="text-4xl font-bold">Kunjungan ke PLTA Bakaru, Pinrang, Sulawesi Selatan</h1>
                    <div className="text-sm font-light">
                        <p>By <span className="font-bold">fisikaunhas</span></p>
                        <p>Mon October 23, 2023 </p>
                    </div>
                </title>
                <figure>
                    <img src={elinshome} alt="" className=" w-[500px]" />
                    <figcaption class="mt-2 text-sm text-center italic">Image caption</figcaption>
                </figure>
                <article className="flex flex-col text-xl gap-y-5 text-justify">
                    <p>Program Studi Sarjana Fisika (PSSF) meraih peringkat Unggul dari Lembaga Akreditasi Mandiri Sains Alam dan Ilmu Formal (LAMSAMA). Peringkat Unggul disampaikan oleh LAMSAMA melalui Surat Keputusan Nomor 74/SK/LAMSAMA/Akred/S/VII/2023 yang berlaku dari tanggal 20 Juli 2023 sampai 20 Juli 2028. Keberhasilan ini secara bersamaan juga dicapai oleh Program Studi Sarjana Biologi dan Program Studi Sarjana Kimia yang merupakan satu lingkup dalam lingkungan Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA).</p>
                    <p>PSSF sebelumnya di tahun 2021 juga telah mendapatkan pemeringkatan akreditasi Prodi dengan predikat Unggul melalui Instrumen Supplemen Konversi (ISK) yang masih dikelola oleh BAN-PT. TIM Task Force Akreditasi LAMSAMA yang merupakan gabungan antara pihak Fakultas dengan Pihak Prodi mulai melakukan pengkolektifan data sejak bulan September 2022 hingga bulan Desember 2022. Ada dua tim yang dibentuk, yaitu: Tim penyusun Laporan Evaluasi Diri dan Tim penyusun tabel Laporan Kinerja Program Studi. Proses review dokumen terlaksana dua kali oleh Tim reviewer LPMPP Saran dari reviewer LPMPP dan TIM Gugus Penjamin Mutu FMIPA yang diketuai oleh Dr. Zaraswati Dwyana, M.Si. Selanjutnya pada bulan Februari 2023, Prodi melakukan registrasi ke sistem LAMSAMA dan menunggu proses Assesmen Kecukupan Dokumen dan jadwal Assesmen Lapangan.</p>
                    <p>Tahap verifikasi ke Prodi, dilakukan melalui kegiatan Assesmen Lapangan yang telah terselenggara pada tanggal 3 – 6 Juli 2023 dengan mengutus dua asesor LAMSAMA. Kedua Asesor tersebut adalah Drs. Johan Noor Effendi, M.Sc., Ph.D. dari Universitas Brawijaya sebagai Ketua TIM Asesor dan Prof. Triyanta, Ph.D. dari Institut Teknologi Bandung. Saat Assesmen Lapangan, PSSF mendatangkan beberapa alumni, mahasiswa serta para stakeholder yang telah terhubung dengan Fisika selama ini terutama dalam Pengembangan Kurikulum. Ada banyak masukan dan saran dari kedua asesor bagi PSSF. Saran dari Dr. Johan Effendi Noor adalah melengkapi perkuliahan dengan dokumen pelengkap pendidikan. Saran dari Prof. Triyanta adalah meminta PSSF mengadakan Eksperimen Fisika Modern atau Lanjut. Eksperimen itu bertujuan menambah keterampilan mahasiswa dan mendekatkan teori yang diterima di kuliah dengan fakta keilmuan.</p>
                </article>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="mt-14 lg:block sm:hidden mx-auto">
                <SideBar />
            </div>      
        </div>
        </>
    );
}
 
export default PostDetails;

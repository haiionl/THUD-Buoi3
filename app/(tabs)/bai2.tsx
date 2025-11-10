import { ThemedView } from '@/components/themed-view';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Bai2Screen() {
  const [toan, setToan] = useState('');
  const [ly, setLy] = useState('');
  const [hoa, setHoa] = useState('');
  const [diemTB, setDiemTB] = useState<number | null>(null);

  const tinhDiem = () => {
    const diemToan = parseFloat(toan);
    const diemLy = parseFloat(ly);
    const diemHoa = parseFloat(hoa);

    if (isNaN(diemToan) || isNaN(diemLy) || isNaN(diemHoa)) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ điểm các môn!');
      return;
    }

    if (diemToan < 0 || diemToan > 10 || diemLy < 0 || diemLy > 10 || diemHoa < 0 || diemHoa > 10) {
      Alert.alert('Lỗi', 'Điểm phải nằm trong khoảng 0-10!');
      return;
    }

    const trungBinh = (diemToan + diemLy + diemHoa) / 3;
    setDiemTB(trungBinh);
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tính Điểm Trung Bình</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>📐 Toán:</Text>
          <TextInput
            style={styles.input}
            value={toan}
            onChangeText={setToan}
            keyboardType="numeric"
            placeholder="Nhập điểm Toán"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>⚛️ Lý:</Text>
          <TextInput
            style={styles.input}
            value={ly}
            onChangeText={setLy}
            keyboardType="numeric"
            placeholder="Nhập điểm Lý"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>🧪 Hóa:</Text>
          <TextInput
            style={styles.input}
            value={hoa}
            onChangeText={setHoa}
            keyboardType="numeric"
            placeholder="Nhập điểm Hóa"
            placeholderTextColor="#999"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={tinhDiem}>
          <Text style={styles.buttonText}>Tính Điểm</Text>
        </TouchableOpacity>

        {diemTB !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Điểm trung bình:</Text>
            <Text style={styles.resultValue}>{diemTB.toFixed(2)}</Text>
            <Text style={styles.classification}>
              {diemTB >= 8 ? '🌟 Giỏi' : diemTB >= 6.5 ? '✨ Khá' : diemTB >= 5 ? '👍 Trung bình' : '📚 Yếu'}
            </Text>
          </View>
        )}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 30,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#f0f8ff',
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4A90E2',
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  resultValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  classification: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
  },
});
